export default function Sale() {
  return (
    <>
        <section className="p-16 bg-[#F9F9F9] font-sans">
      
      <div className="flex justify-between items-center mb-10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-800">Flash Sale</h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
        </div>

        <div className="relative flex items-center justify-center w-24 h-24 border-4 border-pink-500 rounded-full bg-white shadow-lg">
          <span className="text-sm font-bold">30:00:00</span>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <button className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md text-gray-400 hover:text-gray-800 transition">
          &#10094;
        </button>

        <div className="flex flex-1 gap-6 overflow-hidden">
          
          {[1, 2].map((item) => (
            <div key={item} className="flex bg-[#3B2F4A] text-white p-4 rounded-xl flex-1 min-w-112.5">
              
              <div className="w-2/5">
              <img className="rounded-lg shadow-xl w-full h-full object-cover" src="./src/assets/image/book7.png" alt="Book Cover" />
              </div>

              <div className="w-3/5 pl-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-3xl pb-2 pt-21">Rich Dad And Poor Dad</h3>
                  <p className="text-gray-400 text-[16px] mt-1">Author: <span className="font-bold text-white">Robert T. Kiyosaki</span></p>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400 text-2xl">★★★★☆</span>
                    <span className="text-gray-400 text-xs">(180 Review)</span>
                  </div>
                  <p className="text-xs text-gray-400">Rate: 4.2</p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-sm">$45.00</span>
                    <span className="text-4xl font-bold text-white">$30.00</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-bold text-[16px]">4 books left</span>
                  </div>

                  <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-end mt-4 ">
                    <button className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition">
                      <img className='w-5' src="./src/assets/image/shopping-cart (1) 1.png" alt="icon" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md text-gray-400 hover:text-gray-800 transition">
          &#10095;
        </button>
      </div>
    </section>
    </>
  )
}
