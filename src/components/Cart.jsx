import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function Books() {

    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Rich Dad And Poor Dad', author: 'Robert T. Kiyosaki', price: 40, quantity: 1, asin: 'B09TWSRMCB', image: './src/assets/image/book7.png' },
        { id: 2, title: 'Rich Dad And Poor Dad', author: 'Robert T. Kiyosaki', price: 40, quantity: 1, asin: 'B09TWSRMCB', image: './src/assets/image/book7.png' },
        { id: 3, title: 'Rich Dad And Poor Dad', author: 'Robert T. Kiyosaki', price: 40, quantity: 1, asin: 'B09TWSRMCB', image: './src/assets/image/book7.png' },
    ]);

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen ">
            <div className="max-w-6xl mx-auto">


                <div className="hidden md:block  bg-white shadow-sm rounded-lg overflow-hidden mt-20">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                                <th className="py-4 px-6 font-medium">Item</th>
                                <th className="py-4 px-6 font-medium text-center">Quantity</th>
                                <th className="py-4 px-6 font-medium text-center">Price</th>
                                <th className="py-4 px-6 font-medium text-center">Total Price</th>
                                <th className="py-4 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {cartItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-6 px-6 flex items-start space-x-4">
                                        <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded shadow-sm" />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">{item.title}</h3>
                                            <p className="text-xs text-gray-400 mt-1">Author: {item.author}</p>
                                            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                            <span className="inline-block mt-3 text-[10px] border px-2 py-0.5 rounded text-gray-500"> Free Shipping</span>
                                            <p className="text-[10px] text-gray-300 mt-2 font-bold uppercase">ASIN: {item.asin}</p>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-400 text-pink-500 hover:bg-pink-50 cursor-pointer"><Minus size={12} /></button>
                                            <span className="font-semibold">{item.quantity}</span>
                                            <button className="w-6 h-6 flex items-center justify-center rounded-full border border-pink-400 text-pink-500 hover:bg-pink-50 cursor-pointer"><Plus size={12} /></button>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6 text-center font-bold text-lg">${item.price}</td>
                                    <td className="py-6 px-6 text-center font-bold text-lg">${item.price * item.quantity}</td>
                                    <td className="py-6 px-6 text-right">
                                        <button className="text-pink-200 hover:text-red-500 transition-colors cursor-pointer"><Trash2 size={20} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="md:hidden space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex gap-4">
                                <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-gray-900 text-sm leading-tight">{item.title}</h3>
                                        <button className="text-pink-200"><Trash2 size={18} /></button>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1">By {item.author}</p>

                                    <div className="flex justify-between items-end mt-4">
                                        <div className="flex items-center gap-3 border rounded-full px-2 py-1 bg-gray-50">
                                            <button className="text-pink-500 cursor-pointer"><Minus size={14} /></button>
                                            <span className="text-sm font-bold">{item.quantity}</span>
                                            <button className="text-pink-500 cursor-pointer"><Plus size={14} /></button>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400">Total</p>
                                            <p className="font-bold text-lg text-gray-900">${item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

