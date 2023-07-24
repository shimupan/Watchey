import { ShowcaseNavigation, HeroSlider } from ".."

import Omega from "../../assets/seamaster.png"
import Rolex from "../../assets/submariner.png"

export default function Showcase() {
    return (
        <section className="mb-[30px] pt-36 lg:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">

                    {/* Left Nav */}
                    <div>
                        <ShowcaseNavigation />
                    </div>

                    {/* Middle IMG */}
                    <div className="w-full max-w-lg lg:max-w-[735px] mx-auto">
                        <HeroSlider />
                    </div>

                    {/* Right IMGS */}
                    <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
                        <div className="grad flex-1 h-[250px] rounded-[15px] overflow-hidden relative p-6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center uppercase font-medium leading-tight">
                                All New Rolex Submariner
                                <br /><br />
                                <a href="/product/Rolex%20Submariner%20Kermit%20Green" className="text-accent">Buy Now</a>
                            </div>
                            <img src={Rolex} alt="Rolex IMG" className="absolute z-20 -right-4 -bottom-4 h-[18rem] mr-1"/>
                        </div>
                        <div className="grad flex-1 h-[250px] rounded-[15px] overflow-hidden relative p-6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center uppercase font-medium leading-tight">
                                Special Omega Seamaster
                                <br /><br />
                                <a href="/products/Omega" className="text-accent">Buy Now</a>
                            </div>
                            <img src={Omega} alt="Rolex IMG" className="absolute z-20 -right-4 -bottom-4 h-[18rem]"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}