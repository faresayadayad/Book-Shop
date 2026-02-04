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
        },
        {
            id: 3,
            title: "Power",
            author: "Robert Greene",
            price: "$50.00",
            rating: 4.2,
            reviews: 140,
            image: "./src/assets/image/book5.png"
        }
    ];
    return (
        <>

            <section className="p-6 md:p-20 bg-gray-50">
                <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-gray-800 text-center md:text-left">
                    Recomended For You
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white p-4 rounded-lg shadow-sm flex flex-col xs:flex-row gap-4 border border-gray-100 w-full hover:shadow-md transition-shadow"
                        >
                            {/* Image Container */}
                            <div className="w-full xs:w-32 sm:w-35 shrink-0 h-48 xs:h-auto">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover rounded shadow-sm"
                                />
                            </div>


                            <div className="flex flex-col justify-between grow">
                                <div>
                                    <h3 className="font-bold text-base md:text-lg text-gray-900 leading-tight line-clamp-2">
                                        {book.title}
                                    </h3>
                                    <p className="text-gray-400 text-[12px] mt-1">Author: {book.author}</p>


                                    <p className="hidden xs:block text-gray-500 text-[10px] mt-2 line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>

                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                                        <span className="text-gray-400 text-xs">({book.reviews})</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Rate: {book.rating}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50 xs:border-0">
                                    <span className="text-lg md:text-xl font-bold text-gray-800">{book.price}</span>
                                    <div className="flex gap-2">
                                        <button className="bg-[#D81B60] text-white p-2 md:px-4 md:py-2 rounded-md cursor-pointer text-xs font-semibold flex items-center gap-2 hover:bg-pink-700 transition-colors">
                                            <span className="hidden sm:inline">Add To Cart</span>
                                            <img className='w-4 md:w-5' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" />
                                        </button>
                                        <button className="border border-pink-200 p-2 rounded-md text-pink-500 cursor-pointer hover:bg-pink-50 transition-colors">
                                            <img className='w-4 md:w-5' src="./src/assets/image/heart (1) 1.png" alt="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <hr className=' text-gray-300' />
        </>
    )
}
