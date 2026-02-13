import {
    Star, ShoppingCart, Heart, Ticket, Search,
    Mic, ChevronDown, ChevronLeft, ChevronRight, Filter as FilterIcon
} from 'lucide-react';

export default function Books() {
    const categories = [
        { name: 'All Categories', count: 1450 },
        { name: 'Business', count: 140 },
        { name: 'Kids', count: 309 },
        { name: 'Art', count: 102 },
    ];

    const books = [1, 2, 3];

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">


                <aside className="w-full lg:w-64 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-2xl">≡</span> Filter
                        </h2>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-pink-500 font-semibold">
                                <span>Categories</span>
                                <ChevronDown size={18} />
                            </div>
                            {categories.map((cat, i) => (
                                <label key={i} className="flex items-center justify-between text-sm text-gray-500 cursor-pointer hover:text-gray-800">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
                                        {cat.name}
                                    </div>
                                    <span>({cat.count})</span>
                                </label>
                            ))}
                            <button className="text-pink-500 text-xs font-bold mt-2 cursor-pointer">Load More</button>
                        </div>
                    </div>
                </aside>


                <main className="flex-1 space-y-8">


                    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <input type="text" placeholder="Search" className="w-full pl-4 pr-12 py-3 bg-gray-50 border rounded-full focus:outline-none focus:ring-1 focus:ring-pink-400" />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 text-gray-400">
                                <Mic size={20} />
                                <Search size={20} className="text-pink-500" />
                            </div>
                        </div>
                        <select className="bg-gray-50 border rounded-2xl px-6 cursor-pointer py-3 text-sm text-gray-500 focus:outline-none">
                            <option>Sort By</option>
                            <option>Price: Low to High</option>
                            <option>Price: high to low</option>
                            <option>Publication Date</option>
                            <option>Best Seller</option>
                        </select>
                    </div>
                    <div className="flex-wrap flex justify-center sm:flex gap-4">
                        <button className='bg-[#D9176C80] w-28.5 h-10.5 text-white rounded-xl cursor-pointer'>Business</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Self Help</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>History</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Romance</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Fantasy</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Art</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Kids</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Music</button>
                        <button className='outline-offset-0 outline-solid w-28.5 h-10.5 hover:bg-[#D9176C80] hover:text-white transition-all text-[#D9176C80] rounded-xl cursor-pointer'>Cooking</button>
                    </div>


                    <div className="space-y-6">
                        {books.map((item) => (
                            <div key={item} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden group">
                                <div className="w-full md:w-40 h-56 shrink-0">
                                    <img src="./src/assets/image/book7.png" alt="book" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Rich Dad And Poor Dad</h3>
                                            <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                                        </div>
                                        <span className="hidden sm:block border border-yellow-400 text-yellow-600 text-[10px] px-2 py-1 rounded font-bold italic">25% Discount code: Ne212</span>
                                    </div>

                                    <div className="flex items-center gap-1 mt-4">
                                        {[1, 2, 3, 4].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                        <Star size={16} className="text-gray-300" />
                                        <span className="text-xs text-gray-400 ml-2">(210 Review)</span>
                                    </div>

                                    <div className="flex flex-wrap gap-8 mt-4 text-xs">
                                        <div><p className="text-gray-400">Author</p><p className="font-bold">Robert T. Kiyosaki</p></div>
                                        <div><p className="text-gray-400">Year</p><p className="font-bold">1997</p></div>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-2xl font-bold">$40.00</span>
                                        <div className="flex gap-3">
                                            <button className="bg-[#D3145A] text-white cursor-pointer px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-[#b1104b] transition-all">
                                                <ShoppingCart size={18} /> Add To Cart
                                            </button>
                                            <button className="border cursor-pointer border-pink-200 p-2 rounded-lg text-pink-500 hover:bg-pink-50">
                                                <Heart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </main>
            </div>
            <div className="flex flex-col items-center gap-4 pt-10">
                <div className="flex items-center gap-3">
                    <button className="text-pink-300 flex items-center gap-1 text-sm font-bold transition-all cursor-pointer hover:text-[#D3145A]">
                        <ChevronLeft size={20} /> Previous
                    </button>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-xl bg-[#D3145A] text-white font-semibold cursor-pointer shadow-md shadow-pink-100">1</button>
                        <button className="w-10 h-10 rounded-xl bg-white text-gray-400 font-semibold cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors">2</button>
                        <button className="w-10 h-10 rounded-xl bg-white text-gray-400 font-semibold cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors">3</button>
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-400 font-semibold cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors">...</span>
                    </div>
                    <button className="text-[#D3145A] flex items-center gap-1 text-sm font-bold hover:underline cursor-pointer transition-all">
                        Next <ChevronRight size={20} />
                    </button>
                </div>
                <p className="text-sm text-gray-400">1-20 of 5000+ Book available</p>
            </div>
        </div>
    );
};
