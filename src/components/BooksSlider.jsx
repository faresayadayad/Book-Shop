export default function BooksSlider() {
    return (
        <>
            <div className="bg-[#3B2F4A] h-198.75 p-32 flex flex-col justify-center items-center text-center">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="font-bold text-3xl text-white pb-6">Best Seller</h2>
                    <p className="text-[#FFFFFF80] w-130 text-[16px] pb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
            <div className="books flex justify-center items-center gap-16 pb-16">
                <img className="w-43.25" src="./src/assets/images/book1.png" alt="image" />
                <img className="w-43.25" src="./src/assets/images/book2.png" alt="image" />
                <img className="w-43.25" src="./src/assets/images/book3.png" alt="image" />
                <img className="w-43.25" src="./src/assets/images/book4.png" alt="image" />
                <img className="w-43.25" src="./src/assets/images/book5.png" alt="image" />
                <img className="w-43.25" src="./src/assets/images/book6.png" alt="image" />
            </div>
            <button className=" bg-[#D9176C] py-3 w-45 rounded-2xl text-white hover:font-bold cursor-pointer transition-all">Shop now</button>
            </div>
        </>
    )
}
