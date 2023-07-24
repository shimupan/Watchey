import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

export default function ShowcaseNavigation() {
    const { data } = fetchData("/categories");
    if(!data) return <div>Loading</div>
    return (
        <aside className="hidden xl:flex">
            <div className="bg-primary flex flex-col w-[285px] h-[500px] rounded-[16px] overflow-hidden">
                <div className="bg-accent py-4 text-primary uppercase font-semibold flex justify-center items-center">Browse Categories</div>
                <div className="flex flex-col gap-y-6 p-6">
                    {data?.map((category: any) => {
                        return <Link to={`/products/${category.attributes.title}`} key={category.id} className="cursor-pointer uppercase">{category.attributes.title}</Link>
                    })}
                </div>
            </div>
        </aside>
    )
}