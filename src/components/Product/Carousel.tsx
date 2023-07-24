import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";

import { Navigation, Pagination } from 'swiper/modules';

import { Products } from ".."

export default function Carousel( { data }:any ) {

    return (
        <Swiper modules={[Pagination, Navigation]} 
                loop={false} 
                navigation={true} 
                breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }}
        pagination={{
            clickable: true,
        }}
        className="mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
        >
            <>
                {data?.map((product: any) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <Products product={product}/>
                        </SwiperSlide>
                    )
                })}
            </>
        </Swiper>
    )
}