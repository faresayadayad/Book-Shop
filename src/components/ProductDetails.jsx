import { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Star, ShoppingCart, Heart, Share2,
    Plus, Minus, CheckCircle, Truck, Facebook, Instagram, Twitter
} from 'lucide-react';
import CustomerReviews from './CustomerReviews';
import Sale from './Sale';

export default function ProductDetails() {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('details');


    const renderTabContent = () => {
        if (activeTab === 'reviews') {
            return <CustomerReviews />;
        }

        if (activeTab === 'details') {

            return (



                <div className="py-10 space-y-4 max-w-2xl">
                    {[
                        { label: 'Book Title', value: 'Rich Dad And Poor Dad' },
                        { label: 'Author', value: 'Robert T. Kiyosaki' },
                        { label: 'Publication Date', value: '1997' },
                        { label: 'ASIN', value: 'B09TWSRMCB' },
                        { label: 'Language', value: 'English' },
                        { label: 'Publisher', value: 'Printer' },
                        { label: 'Pages', value: '336' },
                        { label: 'Book Format', value: 'Hard Cover' },
                        { label: 'Best Seller Rank', value: '#3' },
                    ].map((info, i) => (
                        <div key={i} className="flex">
                            <span className="font-bold text-gray-900 w-40">{info.label} :</span>
                            <span className="text-gray-600">{info.value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        return <Sale />;
    };

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

            <div className="bg-white min-h-screen p-4 md:p-12 font-sans text-gray-800">
                <div className="max-w-7xl mx-auto">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src="./src/assets/image/book7.png"
                                    alt="Main Book"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                {[1, 2, 3].map((img) => (
                                    <div key={img} className={`w-20 h-24 border-2 rounded-md overflow-hidden cursor-pointer ${img === 1 ? 'border-[#D3145A]' : 'border-gray-200'}`}>
                                        <img src="./src/assets/image/book7.png" className="w-full h-full object-cover" alt="thumb" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl font-bold text-gray-900 leading-tight">Rich Dad And Poor Dad</h1>
                                <div className="flex gap-2 text-gray-400">
                                    <Facebook size={18} className="cursor-pointer hover:text-blue-600" />
                                    <Instagram size={18} className="cursor-pointer hover:text-pink-600" />
                                    <Share2 size={18} className="cursor-pointer hover:text-gray-900" />
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                            </p>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 py-4 border-y border-gray-100">
                                <div><p className="text-[10px] text-gray-400 uppercase">Author</p><p className="text-xs font-bold">Robert T. Kiyosaki</p></div>
                                <div><p className="text-[10px] text-gray-400 uppercase">Year</p><p className="text-xs font-bold">1997</p></div>
                                <div><p className="text-[10px] text-gray-400 uppercase">Book</p><p className="text-xs font-bold">1 Of 1</p></div>
                                <div><p className="text-[10px] text-gray-400 uppercase">Pages</p><p className="text-xs font-bold">336</p></div>
                                <div><p className="text-[10px] text-gray-400 uppercase">Language</p><p className="text-xs font-bold">English</p></div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                    <Star size={16} className="text-gray-200 fill-gray-200" />
                                    <span className="text-xs text-gray-400 ml-2">(210 Review)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1 text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded-full"><CheckCircle size={12} /> In Stock</span>
                                    <span className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 px-2 py-1 rounded-full"><Truck size={12} /> Free Shipping Today</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-black text-gray-900">$40.00</span>
                                <span className="text-xl text-gray-400 line-through">$40.00</span>
                                <span className="text-[10px] text-orange-400 border border-orange-200 px-2 py-1 rounded">Discount code: Ne212</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 pt-4">
                                <div className="flex items-center gap-4 border-2 border-gray-100 rounded-full px-4 py-2 ">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-[#D3145A] cursor-pointer"><Minus size={18} /></button>
                                    <span className="font-bold w-4 text-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="text-[#D3145A] cursor-pointer"><Plus size={18} /></button>
                                </div>

                                <button className="flex-1 sm:flex-none bg-[#D3145A] text-white px-12 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#B1104B] transition-all shadow-lg shadow-pink-100 cursor-pointer ">
                                    <ShoppingCart size={20} /> Add To Cart
                                </button>

                                <button className="p-4 border-2 cursor-pointer border-gray-100 rounded-xl text-gray-300 hover:text-[#D3145A] hover:border-pink-100 transition-all">
                                    <Heart size={24} />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="mt-10 md:mt-20">

                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-200">
                            {['Product Details', 'Customer Reviews', 'Recommended For You'].map((tab) => {
                                const id = tab.toLowerCase().split(' ')[1];

                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(id)}
                                        className={`pb-4 text-left md:text-center text-lg hover:text-[#D3145A] font-bold cursor-pointer transition-all 

                                        ${activeTab === id
                                                ? 'text-[#D3145A] border-l-4 md:border-l-0 md:border-b-4 border-[#D3145A] pl-4 md:pl-0'
                                                : 'text-gray-400 border-l-4 md:border-l-0 border-transparent pl-4 md:pl-0'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="min-h-75">
                            {renderTabContent()}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}