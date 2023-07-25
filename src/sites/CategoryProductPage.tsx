import { useParams } from "react-router-dom";

import fetchData from "../utils/fetchData";

import { ShowcaseNavigation, Products } from "../components";

export default function CategoryProductPage() {

    const { id } = useParams();
    
    const { data } = fetchData(`/products?populate=*&filters[name][$contains]=${id}`);
    
    if(!data) return <div> Loading </div>

    return (
        <div className="mt-16 pt-40 lg:pt-0">
            <div className="container mx-auto">
                <div className="flex gap-x-7">
                    <ShowcaseNavigation />
                    <main>
                        <div className="py-3 text-x1 uppercase text-center lg:text-left">{id}</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                            {data?.map(products => {
                                return <Products product={products} key={products.id}/>
                            })}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}