import { Link } from "react-router-dom";

import fetchData from "../../utils/fetchData";

import { FiX } from "react-icons/fi"

export default function MobileNav( {setNavVisible}:any ) {

    const { data } = fetchData("/categories");

    return (
        <div className="w-full h-full bg-primary p-8">
            <div className="flex text-3xl cursor-pointer justify-end mb-8" onClick={() => setNavVisible(false)}>
                <FiX />
            </div>
            <div className="flex flex-col gap-y-8">
                {data?.map(category => {
                    return (
                        <Link 
                        to={`/products/${category.attributes.title}`} 
                        key={category.id} 
                        className="cursor-pointer uppercase font-medium"
                        onClick={() => {
                            setNavVisible(false);
                        }}
                        >{category.attributes.title}</Link>
                    )
                })}
            </div>
        </div>
    )
}