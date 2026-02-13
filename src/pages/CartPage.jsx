import PayMent from "../components/PayMent";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function CartPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="relative min-h-30 md:h-30 w-full flex flex-col overflow-hidden">

                <img src="./src/assets/image/bg.png" alt="Library" className="absolute inset-0 h-full w-full object-cover" />


                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-white/15 h-20"></div>

                <nav className="relative z-50 flex items-center justify-between px-4 pt-0  text-white">


                    <div className="flex items-center gap-2 text-xl font-bold">
                        <img className='w-5' src="./src/assets/image/logo.png" alt="icon" />
                        <span className="text-xl md:text-2xl">Bookshop</span>
                    </div>


                    <button className="md:hidden text-white focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)} >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>


                    <div className={`
                    fixed inset-0 bg-black/70 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:static md:bg-transparent md:flex-row md:translate-x-0 z-40
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                        <Link onClick={() => setIsOpen(false)} to="/" className="text-2xl md:text-[20px] hover:text-pink-400 transition-all">Home</Link>
                        <Link onClick={() => setIsOpen(false)} to="/Books" className="text-2xl md:text-[20px] hover:text-pink-400 transition-all">Books</Link>
                        <Link onClick={() => setIsOpen(false)} to="/About" className="text-2xl md:text-[20px] hover:text-pink-400 transition-all">About us</Link>


                        <div className="flex gap-4 mt-4">
                            <img className='w-12 h-12 rounded-full' src="./src/assets/image/Avatar Image.png" alt="User" />
                            <div className="text-center">
                                <h3 className="font-bold">John Smith</h3>
                                <p className="text-xs opacity-60">Johnsmith@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 ">
                            <button className="p-3 bg-pink-700 rounded-full"><img className='w-6' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" /></button>
                            <button className="p-3 bg-white rounded-full"><img className='w-6' src="./src/assets/image/heart (1) 1.png" alt="icon" /></button>
                        </div>
                    </div>
                </nav>

            </header>

            <Cart />
            <PayMent />
        </>
    )
}
