export default function Header() {
    return (
        <header className="relative h-70 w-full">
            <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Library"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 bg-white/15 h-20"></div>
            <nav className="relative z-10 flex items-center justify-between px-10 py-4 text-white">
                <div className="flex items-center gap-2 text-xl font-bold">
                    📚 <span>Bookshop</span>
                </div>

                <ul className="flex items-start gap-8">
                    <li className="cursor-pointer hover:text-pink-400 transition-all">Home</li>
                    <li className="cursor-pointer hover:text-pink-400 transition-all">Books</li>
                    <li className="cursor-pointer hover:text-pink-400 transition-all">About us</li>
                </ul>

                <div className="flex gap-3">
                    <button className="rounded-md bg-pink-600 px-4 py-2 hover:bg-pink-700 transition-all">
                        Log in
                    </button>
                    <button className="rounded-md border bg-white border-pink-600 px-4 py-2 text-pink-500 hover:bg-pink-600 transition-all hover:text-white">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
}