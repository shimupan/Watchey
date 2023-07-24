import { useLocation } from "react-router-dom";

import fetchData from "../utils/fetchData";

import { Products, ShowcaseNavigation } from "../components";

export default function SearchFeed() {
    const location = useLocation();
    const params = new URLSearchParams(location.search).get("query")
    
    const { data } = fetchData(`/products?populate=*&filters[name][$contains]=${params}`)
    
    return (
        <div className="mb-[30px] pt-[14rem] lg:pt-10">
            <div className="container mx-auto ">
                <div className="flex gap-x-[30px]">
                    <ShowcaseNavigation />
                    <div>
                        <div className="pb-2 uppercase">
                            {data?.length > 0 ? 
                            `${data?.length} results found for ${params}` : 
                            `0 results found for ${params}`}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                            {data?.map(products => {
                                return <Products key={products.id} product={products}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}