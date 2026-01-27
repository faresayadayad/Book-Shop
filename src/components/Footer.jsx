import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#3b2f44] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-500 pb-8 gap-6">

                    <div className="flex items-center gap-2">
                        📚 <span className="text-xl font-bold tracking-tight">Bookshop</span>
                    </div>

                    <nav className="flex gap-8 font-medium">
                        <a href="#" className="hover:text-pink-400 transition-colors">Home</a>
                        <a href="#" className="hover:text-pink-400 transition-colors">Books</a>
                        <a href="#" className="hover:text-pink-400 transition-colors">About Us</a>
                    </nav>

                    <div className="flex gap-5 text-2xl">
                        <i className="fa-brands fa-facebook cursor-pointer hover:text-pink-400 transition-all"></i>
                        <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-400 transition-all"></i>
                        <i className="fa-brands fa-youtube cursor-pointer hover:text-pink-400 transition-all"></i>
                        <i className="fa-brands fa-x-twitter cursor-pointer hover:text-pink-400 transition-all"></i>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-300 gap-4">

                    <p>
                        &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024&gt;
                    </p>

                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-globe"></i>

                        <button className="flex items-center gap-10 border border-gray-500 px-4 py-1.5 rounded-md hover:bg-white/10 transition-all">
                            <span>English</span>
                            <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};
