import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="relative h-100 w-full">
            <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Library"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 bg-white/15 h-20"></div>
            <nav className="relative z-10 flex items-center justify-between px-10 py-4 text-white">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <img className='w-5' src="./src/assets/images/logo.png" alt="icon" /> <span className="text-2xl">Bookshop</span>
                </div>
                <div className="flex  gap-8">
                    <Link to="/" className="cursor-pointer text-[20px] hover:text-pink-400 transition-all">Home</Link>
                    <Link to="/books" className="cursor-pointer text-[20px] hover:text-pink-400 transition-all">Books</Link>
                    <Link to="/about" className="cursor-pointer text-[20px] hover:text-pink-400 transition-all">About us</Link>
                </div>
               
                <div className="flex justify-center items-center ">
                    <div className="flex items-center w-100 h-11 bg-white rounded-full shadow-lg overflow-hidden ">
                        
                        <input 
                        type="text" 
                        placeholder="Search" 
                        className="flex-1 px-6 py-4 text-lg text-gray-600 outline-none placeholder:text-gray-400"
                        />

                        <button className="px-4 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                        </button>

                        <button className="bg-pink-700 p-5 text-white hover:cursor-pointer transition-all flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </button>
                        
                    </div>

    </div>

                <div className="flex gap-3">
                    
                    <Link to="/login" className="cursor-pointer rounded-md bg-pink-600 px-4 py-2 hover:bg-pink-700 transition-all">Log in</Link>

                    <Link to="/signup" className="cursor-pointer rounded-md border bg-white border-pink-600 px-4 py-2 text-pink-500 hover:bg-pink-600 transition-all hover:text-white">Sign Up</Link>
                    
                </div>
            </nav>
        </header>
    );
}