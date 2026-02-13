import React from 'react';
import { Star } from 'lucide-react';

export default function CustomerReviews ()  {

    const reviews = [
        { id: 1, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
        { id: 2, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
        { id: 3, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
        { id: 4, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
        { id: 5, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
        { id: 6, name: 'John Smith', date: '28/07/2024', rating: 5.0, title: 'Excellent Book' },
    ];

    return (
        <div className="bg-[#F9F9F9] p-4 md:p-10">
            <div className="max-w-7xl mx-auto">

               

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-4">


                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src="./src/assets/image/book7.png"
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <p className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wider">Verified Purchase</p>
                                </div>
                            </div>


                            <div className="space-y-2">
                                <p className="text-xs text-gray-400 font-medium tracking-tight">Reviewed On {review.date}</p>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-gray-900">{review.title}</span>
                                    <span className="text-sm font-bold text-gray-800 ml-2">{review.rating.toFixed(1)}</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <p className="text-sm text-gray-500 leading-relaxed italic">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo."
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

