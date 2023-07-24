import fetchData from "../utils/fetchData";

import { FeaturedProducts, Showcase } from "../components";

export default function Home() {

    //request new data
    const { data } = fetchData("/products?populate=*&filters[new]=false");
    return (
        <section>
            <Showcase />
            <FeaturedProducts data={data} />
        </section>
    )
}