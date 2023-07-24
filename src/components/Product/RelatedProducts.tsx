import fetchData from "../../utils/fetchData"

import { FeaturedProducts } from ".."

export default function RelatedProducts( {title, currProduct}:any ) {

    
    const { data } = fetchData(`/products?populate=*&filters[categories][title]=${title}`);

    if(!data) return <div> Loading </div>

    return (
        <div>
            <div className="container mx-auto mt-5">
                <h2>
                    <FeaturedProducts data={data} Featured={false}/>
                </h2>
            </div>
        </div>
    )
}