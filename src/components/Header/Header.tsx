import { useContext, useState } from "react";
import { SlBag } from "react-icons/sl"
import { FiMenu } from "react-icons/fi"

import { Link } from "react-router-dom";

import { SearchBar, Cart, MobileNav } from "..";

import { cartState } from "../Cart/CartInventory";

import GitHubLogo from "../../assets/github-mark.svg";

export default function Header() {
    const { menuOpen, setMenuOpen, itemCount } = useContext(cartState);
    const [mobileNavVisibile, setMobileNavVisible] = useState(false);

    return (
        <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
            <div className="container mx-auto">
                <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0">
                    {/* Menu */}
                    <div className="text-3xl xl:hidden cursor-pointer p-5 pt-8" onClick={() => setMobileNavVisible(true)}>
                        <FiMenu />
                    </div>

                    <div className={`${mobileNavVisibile ? "right-0" : "right-full"} fixed top-0 bottom-0 z-30 w-full h-screen transtion-all duration-200`}>
                        <MobileNav setNavVisible={setMobileNavVisible} />
                    </div>

                    {/* Logo */}
                    <Link to={""}>
                        <img src={GitHubLogo} alt="Logo Icon" className="h-[4rem] mr-9"/>
                        <div className="ml-2 mt-1 text-accent">HOME</div>
                    </Link>
                    {/* Large Search Bar */}
                    <div className="hidden w-full xl:flex xl:max-w-[734px]">
                        <SearchBar />
                    </div>

                    {/* Phone and Cart */}
                    <div className="flex items-center gap-x-[10px]">
                        <div className="hidden xl:flex uppercase">Need Help? Call 123-456-7890</div>
                        <div className="relative cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                            <SlBag />
                            <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center font-bold"> {itemCount} </div>
                        </div>
                        <div className={`
                            ${menuOpen ? "right-0" : "right-full"}
                            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transtion-all duration-75`}>
                            <Cart />
                        </div>
                    </div>
                </div>
                {/* Mobile Search Bar */}
                <div className="xl:hidden lg:p-3">
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}