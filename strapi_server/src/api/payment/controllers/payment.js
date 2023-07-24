const stripe = require("stripe")("sk_test_51NX3uLK25yCojh4UZmvFxqvUKlzacslWsbdRWr4pSAGUkcck3DfB9aM5RUV3DbfJRASBka5Cw6rWzQzcAOEYPq2U00rDE4qRoF")

'use strict';

/**
 * payment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment.payment', ({strapi}) => ({
    async create(ctx) {
        const {currCart} = ctx.request.body;
        if(!currCart) {
            ctx.response.status = 400;
            return {error: "Cart not found"};
        }
        const lineItems = await Promise.all(
            currCart.map(async (product) => {
                const item = await strapi.service("api::product.product").findOne(product.id);
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: product.amount,
                };
            })
        );
        try {
            const session = await stripe.checkout.sessions.create({
                mode: "payment",
                success_url: `http://127.0.0.1:5173?success=true`,
                cancel_url: `http://127.0.0.1:5173?success=false`,
                line_items: lineItems,
                shipping_address_collection: {allowed_countries: ["US", "CA"]},
                payment_method_types: ["card"],
            });
            await strapi.service("api::payment.payment").create({
                data: {
                    products: currCart,
                    stripeId: session.id,
                },
            });
            return {stripeSession: session};
        } catch (error) {
            ctx.response.status = 500;
        }
    },
}));
