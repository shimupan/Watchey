import { Link } from "react-router-dom";

export default function Products( {product}: any ) {
    return (
        <Link to={`/product/${product.attributes.name}`} onClick={() => {window.scrollTo(0, 0)}}>
            <div className="grad w-full h-[400px] rounded-[15px] overflow-hidden relative group flex justify-center">
                {/* Render Product Badge only if its new */}
                {!product.attributes.new ? 
                <div className="absolute top-4 left-4 bg-accent w-[36px] text-[12px] font-extrabold text-primary uppercase rounded-full">
                    &nbsp;&nbsp;New
                </div> : "" }
                {/* Render Brand */}
                <div className="absolute top-4 text-accent">
                    {product.attributes.categories.data[0].attributes.title}
                </div>
                {/* Render Product Card */}
                <div className="w-64 h-64 aspect-w-1 aspect-h-1 mt-12">
                    <img src={`http://localhost:1337${product.attributes.img.data.attributes.url}`} 
                         alt="Watch images" 
                         className="object-cover w-full h-full group-hover:scale-90 transition-all"/>
                </div>
                {/* Render Product Name*/}
                <div className="absolute top-[20rem]">
                    {product.attributes.name.substring(0,15)}...
                </div>
                {/* Render Price */}
                <div className="absolute top-[21.5rem] text-lg text-accent">
                    ${product.attributes.price.toLocaleString()}
                </div>
            </div>
        </Link>
    )
}