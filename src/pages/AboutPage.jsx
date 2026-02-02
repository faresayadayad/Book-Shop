import About from "../components/About";
import Features from "../components/Features";
import Questions from "../components/Questions";
import { Link } from "react-router-dom";
import HeaderAfterSignUpPage from "./HeaderAfterSignUpPage";

export default function AboutPage() {
    return (
        <>
            {/* <HeaderAfterSignUpPage /> */}
            <header className="relative h-201 w-full flex flex-col">

                <img src="./src/assets/image/bg.png" alt="Library" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>

                <nav className="relative z-10 flex items-center justify-between px-10 py-4 text-white bg-white/15 h-20">
                    <div className="flex items-center gap-2">
                        <img className='w-5' src="./src/assets/image/logo.png" alt="icon" />
                        <span className="text-2xl font-bold">Bookshop</span>
                    </div>

                    <div className="flex gap-8">
                        <Link to="/" className=" text-[20px] hover:text-white transition-all">Home</Link>
                        <Link to="/Books" className="text-[20px] hover:text-pink-400 transition-all">Books</Link>
                        <Link to="/About" className="text-pink-400 text-[20px] hover:text-pink-400 transition-all">About us</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 cursor-pointer bg-pink-700 rounded-lg hover:bg-pink-600 transition-all"><img className='w-5' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" /></button>
                        <button className="p-2 cursor-pointer bg-white rounded-lg hover:bg-pink-100 transition-all"><img className='w-5' src="./src/assets/image/heart (1) 1.png" alt="icon" /></button>

                        <div className="flex items-center gap-3 ml-2">
                            <img className='w-10 h-10 rounded-full' src="./src/assets/image/Avatar Image.png" alt="User" />
                            <div>
                                <h3 className="font-bold text-sm">John Smith</h3>
                                <h4 className="text-[10px] opacity-80">Johnsmith@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="relative m-auto">
                        <h2 className="text-[48px] text-white font-bold flex items-center justify-center">About Bookshop</h2>
                        <p className="w-163 mt-4 flex items-center text-center justify-center text-white text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
            </header>
            <About />
            <Questions />
            <Features />
        </>
    )
}
