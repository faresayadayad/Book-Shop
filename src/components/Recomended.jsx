export default function Recomended() {
    const books = [
        {
            id: 1,
            title: "Rich Dad And Poor Dad",
            author: "Robert T. Kiyosaki",
            price: "$30.00",
            rating: 4.2,
            reviews: 180,
            image: "./src/assets/image/book7.png"
        },
        {
            id: 2,
            title: "The Design Of Books",
            author: "Debbie Berne",
            price: "$40.00",
            rating: 4.2,
            reviews: 210,
            image: "./src/assets/image/book8.png"
        }
    ];
    return (
        <>

            <section className="p-20  bg-gray-50">
                <h2 className="text-2xl font-bold mb-12 text-gray-800 ">Recomended For You</h2>

                <div className="flex flex-wrap gap-12 justify-center">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white p-4 rounded-lg shadow-sm flex gap-4 border border-gray-100 flex-1 "
                        >
                            <div className="w-35 shrink-0">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover rounded shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col justify-between grow">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{book.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">Author: {book.author}</p>
                                    <p className="text-gray-500 text-1xl mt-2 line-clamp-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                                    </p>

                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                                        <span className="text-gray-400 text-xs">({book.reviews} Review)</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Rate: {book.rating}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl font-bold text-gray-800">{book.price}</span>
                                    <div className="flex gap-2">
                                        <button className="bg-[#D81B60] text-white px-4 py-2 rounded-md cursor-pointer text-sm font-semibold flex items-center gap-2 hover:bg-pink-700 transition-colors">
                                            Add To Cart <img className='w-5' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" />
                                        </button>
                                        <button className="border border-pink-200 p-2 rounded-md text-pink-500 cursor-pointer hover:bg-pink-50 transition-colors">
                                            <img className='w-5' src="./src/assets/image/heart (1) 1.png" alt="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
                <hr className=' text-gray-300'/>
        </>
    )
}
