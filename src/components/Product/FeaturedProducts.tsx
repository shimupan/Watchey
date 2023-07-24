import { Carousel } from ".."

export default function FeaturedProducts( {data, Featured = true}:any ) {
    return (
        <div className="mb-16">
            <div className="container mx-auto">
                {Featured ? <h2 className="h2 text-center mb-6">Featured Products</h2> : <h2 className="h2 text-center mb-6">Related Products</h2>}
            </div>
            <Carousel data={data} />
        </div>
    )
}