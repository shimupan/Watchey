import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css";
import { Pagination, Autoplay } from 'swiper/modules';

import { Link } from "react-router-dom";

import MainSlider from "../../utils/constants"

export default function HeroSlider() {
    return (
        <Swiper modules={[Pagination, Autoplay]} 
                loop={true} 
                autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        pagination={{
            clickable: true,
        }}
        className="h-full bg-primary bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[16px] overflow-hidden"
        >
            <>
                {MainSlider.map((product, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div>
                                <div className="w-full lg:flex-1">
                                    <div className="p-2">Grand Seiko</div>
                                    <div className="font-semibold leading-none mt-8 md:absolute md:text-[30px] xl:text-[45px] text-center ml-1 lg:ml-[7rem] lg:mt-[10rem] p-1">
                                        {product.title} 
                                        <br /> <br /> 
                                        <Link to={"products/Grand%20Seiko"} className="btn btn-accent cursor-pointer">Shop Now</Link>
                                    </div>
                                </div>
                                <div className="flex-1 h-[28rem] sm: ml-4">
                                    <img src={product.img} alt="product images" className="xl:absolute xl:-right-16 xl:h-[30rem] md:absolute md:-right-[1rem] md:h-[30rem]"/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </>
        </Swiper>
    )
}