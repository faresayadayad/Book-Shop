import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative h-24 md:h-100 w-full overflow-visible">

            <img src="./src/assets/image/bg.png" alt="Library" className="absolute inset-0 h-full w-full object-cover" />


            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-white/15 h-20"></div>

            <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 text-white">


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


                    <div className="flex flex-col md:hidden gap-4 mt-4 w-48">
                        <Link onClick={() => setIsOpen(false)} to="/login" className="text-center rounded-md bg-pink-600 px-4 py-3">Log in</Link>
                        <Link onClick={() => setIsOpen(false)} to="/signup" className="text-center rounded-md border border-pink-600 bg-white text-pink-500 px-4 py-3">Sign Up</Link>
                    </div>
                </div>


                <div className="hidden md:flex gap-3">
                    <Link to="/login" className="rounded-md bg-pink-600 px-4 py-2 hover:bg-pink-700 transition-all">Log in</Link>
                    <Link to="/signup" className="rounded-md border bg-white border-pink-600 px-4 py-2 text-pink-500 hover:bg-pink-600 transition-all hover:text-white">Sign Up</Link>
                </div>

            </nav>
        </header>
    );
}