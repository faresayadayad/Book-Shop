export default function Sale() {
  return (
    <>
      <section className="p-6 md:p-12 bg-[#F9F9F9] font-sans">

        <div className="flex flex-col items-center mb-10 text-center md:flex-row md:justify-between">
          <div className="max-w-xl md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Flash Sale</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
            </p>
          </div>


          <div className="relative flex mt-8 items-center justify-center w-20 h-20 md:w-24 md:h-24 border-4 border-pink-500 rounded-full bg-white shadow-lg">
            <span className="text-xs md:text-sm font-bold">30:00:00</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>
          </div>
        </div>


        <div className="flex items-center gap-2 md:gap-4">

          <button className="hidden md:flex w-10 h-10 shrink-0 items-center justify-center rounded-full cursor-pointer bg-white shadow-md text-gray-400 hover:text-gray-800 transition">
            &#10094;
          </button>

          <div className="flex flex-col lg:flex-row gap-6 w-full overflow-hidden">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col sm:flex-row bg-[#3B2F4A] text-white p-4 rounded-xl flex-1 w-full"
              >

                <div className="w-full sm:w-2/5 h-64 sm:h-auto">
                  <img
                    className="rounded-lg shadow-xl w-full h-full object-cover"
                    src="./src/assets/image/book7.png"
                    alt="Book Cover"
                  />
                </div>


                <div className="w-full sm:w-3/5 pt-4 sm:pt-0 sm:pl-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl md:text-3xl pb-2 lg:pt-4">Rich Dad And Poor Dad</h3>
                    <p className="text-gray-400 text-sm md:text-[16px] mt-1">
                      Author: <span className="font-bold text-white">Robert T. Kiyosaki</span>
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-400 text-lg md:text-2xl">★★★★☆</span>
                      <span className="text-gray-400 text-xs">(180 Review)</span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-gray-500 line-through text-xs md:text-sm">$45.00</span>
                      <span className="text-2xl md:text-4xl font-bold text-white">$30.00</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-sm md:text-[16px]">4 books left</span>
                    </div>

                    <div className="w-full bg-gray-700 h-2 md:h-3 rounded-full overflow-hidden">
                      <div className="bg-orange-400 h-full w-3/4"></div>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button className="bg-pink-600 p-2 md:p-3 rounded-lg hover:bg-pink-700 transition w-full sm:w-auto flex justify-center">
                        <img className='w-5' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <button className="hidden md:flex w-10 h-10 shrink-0 items-center justify-center rounded-full cursor-pointer bg-white shadow-md text-gray-400 hover:text-gray-800 transition">
            &#10095;
          </button>
        </div>
      </section>
    </>
  )
}
