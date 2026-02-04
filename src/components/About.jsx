
export default function About() {
  return (
    <>
      <div className="p-20 bg-[#F5F5F5]">
        <h2 className="flex items-center justify-center text-3xl font-bold m-8 text-center">Our Mission</h2>
        <div className="cards m-10 flex gap-10 items-center justify-center flex-wrap">

          <div className="card-1 w-90 p-4 outline-2 outline-offset-2 outline-[#22222233] rounded-xl">
            <h2 className="text-[#222222] font-bold text-2xl mb-4">Quality Selection</h2>
            <p className="text-[#22222280]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

            <div className="flex items-center gap-4 mt-2">
              <button className="text-red-600 cursor-pointer">View More</button>
              <img className="w-4" src="./src/assets/image/arrow.png" alt="icon" />
            </div>

          </div>

          <div className="card-2 w-90 p-4 outline-2 outline-offset-2 outline-[#22222233] rounded-xl">
            <h2 className="text-[#222222] font-bold text-2xl mb-4">Exceptional Service</h2>
            <p className="text-[#22222280]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

            <div className="flex items-center gap-4 mt-2">
              <button className="text-red-600 cursor-pointer">View More</button>
              <img className="w-4" src="./src/assets/image/arrow.png" alt="icon" />
            </div>

          </div>

          <div className="card-3 w-90 p-4 outline-2 outline-offset-2 outline-[#22222233] rounded-xl">
            <h2 className="text-[#222222] font-bold text-2xl mb-4">Set Up Stores</h2>
            <p className="text-[#22222280]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</p>

            <div className="flex items-center gap-4 mt-2">
              <button className="text-red-600 ">Soon</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
