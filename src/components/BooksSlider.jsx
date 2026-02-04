import Slider from "react-slick"
import Book1 from "../assets/image/book1.png"
import Book2 from "../assets/image/book2.png"
import Book3 from "../assets/image/book3.png"
import Book4 from "../assets/image/book4.png"
import Book5 from "../assets/image/book5.png"
import Book6 from "../assets/image/book6.png"

export default function BooksSlider() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     speed: 2000,
        //     autoplaySpeed: 2000,
        //     cssEase: "linear"
        // };
    return (
        <>                    
            <div className="bg-[#3B2F4A]   p-8 md:p-16 flex flex-col justify-center items-center text-center">
                <div className="flex flex-col justify-center items-center text-center">
                    <h2 className="font-bold text-3xl text-white pb-6">Best Seller</h2>
                    <p className="text-[#FFFFFF80] w-full text-[16px] pb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
                <div className="books flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 md:flex-wrap pb-8 md:pb-16 ">
                    <img className="w-40 h-auto max-w-full" src={Book1} alt="image" />
                    <img className="w-40 h-auto max-w-full" src={Book2} alt="image" />
                    <img className="w-40 h-auto max-w-full" src={Book3} alt="image" />
                    <img className="w-40 h-auto max-w-full" src={Book4} alt="image" />
                    <img className="w-40 h-auto max-w-full" src={Book5} alt="image" />
                    <img className="w-40 h-auto max-w-full" src={Book6} alt="image" />

                </div>
                <button className=" bg-[#D9176C] py-3 w-45 rounded-2xl text-white hover:font-bold cursor-pointer transition-all">Shop now</button>
            </div>

            {/* <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div> */}
        </>
    )
}
