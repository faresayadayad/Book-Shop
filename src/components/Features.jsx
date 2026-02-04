export default function Features() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center p-6 md:p-10 gap-8">

                <div className="FastCard w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-62.5">
                    <img className="w-10 m-auto" src="./src/assets/image/Vector.png" alt="image" />
                    <h3 className="font-bold py-4 text-center">Fast & Reliable Shipping</h3>
                    <p className="text-[#22222280] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>


                <div className="SecureCard w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-62.5">
                    <img className="w-10 mt-12 md:mt-0 m-auto" src="./src/assets/image/credit-card-buyer 1.png" alt="image" />
                    <h3 className="font-bold py-4 text-center">Secure Payment</h3>
                    <p className="text-[#22222280] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>


                <div className="EasyCard w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-62.5">
                    <img className="w-10 mt-12 md:mt-0 m-auto" src="./src/assets/image/restock 1.png" alt="image" />
                    <h3 className="font-bold py-4 text-center">Easy Returns</h3>
                    <p className="text-[#22222280] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>


                <div className="SupportCard w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-62.5">
                    <img className="w-10 mt-12 md:mt-0 m-auto" src="./src/assets/image/user-headset 1.png" alt="image" />
                    <h3 className="font-bold py-4 text-center">24/7 Customer Support</h3>
                    <p className="text-[#22222280] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                </div>
            </div>
        </>
    )
}
