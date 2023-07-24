import { useParams } from "react-router-dom"

import { useContext } from "react";

import fetchData from "../utils/fetchData"

import { RelatedProducts, Products } from "../components"

import { cartState } from "../components/Cart/CartInventory";

export default function ProductView() {
    
    const { addItem } = useContext(cartState);

    const { id } = useParams();

    const { data } = fetchData(`/products?populate=*&filters[name][$eq]=${id}`);
    
    if(!data) return <div>Loading</div>

    return (
        <div className="mt-16 pt-44 lg:pt-[30px] xl:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex justify-center grad rounded-lg items-center">
                        <img 
                        src={`http://localhost:1337${data[0].attributes.img.data.attributes.url}`} 
                        alt="Watch Picture"
                        className="w-full max-w-[75%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]"
                        />
                    </div>
                    <div className="bg-primary flex-1 p-12 rounded-lg">
                        <div className="text-accent uppercase font-medium text-center mb-4">
                            {data[0].attributes.categories.data[0].attributes.title}
                        </div>
                        <h2 className="h2 text-center pb-4">
                            {data[0].attributes.name}
                        </h2>
                        <p className="text-center pb-8">
                            {data[0].attributes.description}
                        </p>
                        <div>
                            <div className="text-center pt-4 text-3xl font-bold flex flex-col">
                                ${data[0].attributes.price.toLocaleString()}
                                <br />
                                <br />
                                <button className="btn btn-accent" onClick={() => {addItem(data[0], data[0].id)}}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts title={data[0].attributes.categories.data[0].attributes.title} currProduct={data[0].attributes.name}/>
            </div>
        </div>
    )
}