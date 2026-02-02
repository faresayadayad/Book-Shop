import { Link } from "react-router-dom";

export default function HeaderAfterSignUp() {
    return (
        <header className="relative h-201 w-full flex flex-col">

            <img src="./src/assets/image/bg.png" alt="Library" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>

            <nav className="relative z-10 flex items-center justify-between px-10 py-4 text-white bg-white/15 h-20">
                <div className="flex items-center gap-2">
                    <img className='w-5' src="./src/assets/image/logo.png" alt="icon" />
                    <span className="text-2xl font-bold">Bookshop</span>
                </div>

                <div className="flex gap-8">
                    <Link to="/" className="text-pink-400 text-[20px] hover:text-white transition-all">Home</Link>
                    <Link to="/Books" className="text-[20px] hover:text-pink-400 transition-all">Books</Link>
                    <Link to="/About" className="text-[20px] hover:text-pink-400 transition-all">About us</Link>
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

            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="flex items-center w-full max-w-150 h-14 bg-white rounded-full shadow-2xl overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 px-8 text-lg text-gray-600 outline-none"
                    />
                    <button className="px-4 text-gray-400 hover:text-pink-600 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                    </button>

                    <button className="bg-pink-700 h-full px-8 text-white hover:bg-pink-600 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}