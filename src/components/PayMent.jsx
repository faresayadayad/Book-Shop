import { Ticket } from 'lucide-react';

export default function PayMent() {
    return (
        <div className="p-4 md:p-8 bg-gray-100 font-sans">
            <div className="max-w-6xl mx-auto bg-[#E5E7EB]/50 p-6 md:p-12 rounded-lg">


                <div className="flex flex-col md:flex-row gap-12 md:gap-24">


                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Summary</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                        </p>

                        <div className="space-y-3">
                            <label className="text-gray-400 text-sm block">Have a discount code? </label>
                            <div className="flex gap-3">
                                <div className="relative flex-1 max-w-sm">
                                    <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        className="w-full pl-10 pr-4 py-3 bg-gray-200/50 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                                    />
                                </div>
                                <button className="bg-[#3D3449] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2D2636] transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="w-full md:w-87.5 space-y-4">
                        <div className="space-y-4 pb-4 border-b border-gray-300">
                            <div className="flex justify-between items-center text-gray-500">
                                <span>Subtotal</span>
                                <span className="font-bold text-gray-800 text-lg">$120</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500">
                                <span>Shipping</span>
                                <span className="font-bold text-gray-800">Free Delivery</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-500">
                                <span>Tax</span>
                                <span className="font-bold text-gray-800 text-lg">$4</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-500 text-lg">Total</span>
                            <span className="text-[#D3145A] font-bold text-3xl">$124</span>
                        </div>

                        <div className="space-y-3 pt-4">
                            <button className="w-full bg-[#D3145A] text-white py-4 rounded-md font-bold text-sm hover:bg-[#B1104B] transition-colors shadow-lg shadow-pink-200">
                                Check out
                            </button>
                            <button className="w-full bg-transparent border border-[#D3145A] text-[#D3145A] py-4 rounded-md font-bold text-sm hover:bg-pink-50 transition-colors">
                                Keep Shopping
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
