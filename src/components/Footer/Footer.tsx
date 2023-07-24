import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="pt-16 bg-primary">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="h2 uppercase mb-6 font-semibold">Subscribe to our newsletter</h2>
                    <p className="text-white/70 mb-6">Be the latest to recieve news from Watchey!</p>
                </div>
                <form className="w-full max-w-2x1 mx-auto flex flex-row gap-5 mb-14">
                    <input type="text" placeholder="example@email.com" className="input"/>
                    <button className="btn btn-accent main-w-[150px]">Join</button>
                </form>
                <div className="text-base text-white/60 flex gap-x-6 justify-center mb-14">
                    <a href="#" className="hover:text-white transition-all">Returns</a>
                    <a href="#" className="hover:text-white transition-all">Track Shipping</a>
                    <a href="#" className="hover:text-white transition-all">Questions?</a>
                </div>
                <div className="flex gap-x-6 max-w-max mx-auto text-xl mb-5">
                    <a href="https://github.com/shimupan"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/shimupan/"><FaLinkedin /></a>
                </div>
            </div>
            <div className="py-10 border-t border-t-white/10">
                <div className="container mx-auto text-center text-sm text-white/60">
                    <div>
                        Copyright &copy; Watchey
                    </div>
                    <div>
                        All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}