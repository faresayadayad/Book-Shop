import Book1 from "../assets/image/book1.png"
import Book2 from "../assets/image/book2.png"
import Book3 from "../assets/image/book3.png"
import Book4 from "../assets/image/book4.png"
import Book5 from "../assets/image/book5.png"
import Book6 from "../assets/image/book6.png"
export default function BooksSlider() {
    return (
        <>
            <div className="bg-[#3B2F4A] h-198.75 p-32 flex flex-col justify-center items-center text-center">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="font-bold text-3xl text-white pb-6">Best Seller</h2>
                    <p className="text-[#FFFFFF80] w-130 text-[16px] pb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
            <div className="books flex justify-center items-center gap-16 pb-16">
                <img className="w-43.25" src={Book1} alt="image" />
                <img className="w-43.25" src={Book2} alt="image" />
                <img className="w-43.25" src={Book3} alt="image" />
                <img className="w-43.25" src={Book4} alt="image" />
                <img className="w-43.25" src={Book5} alt="image" />
                <img className="w-43.25" src={Book6} alt="image" />
                
            </div>
            <button className=" bg-[#D9176C] py-3 w-45 rounded-2xl text-white hover:font-bold cursor-pointer transition-all">Shop now</button>
            </div>
        </>
    )
}
