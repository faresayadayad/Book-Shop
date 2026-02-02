import Features from "../components/Features";
import BooksSlider from "../components/BooksSlider";
import Recomended from "../components/Recomended";
import Sale from "../components/Sale";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <header className="relative h-100 w-full">
        <img src="./src/assets/image/bg.png" alt="Library" className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-white/15 h-20"></div>
        <nav className="relative z-10 flex items-center justify-between px-10 py-4 text-white">
          <div className="flex items-center gap-2 text-xl font-bold mr-12">
            <img className='w-5' src="./src/assets/image/logo.png" alt="icon" /> <span className="text-2xl">Bookshop</span>
          </div>
          <div className="flex  gap-8">
            <Link to="/" className="cursor-pointer text-[20px] hover:text-pink-400 hover:mr-2 transition-all">Home</Link>
            <Link to="/Books" className="cursor-pointer text-[20px] hover:text-pink-400 hover:mx-2 transition-all">Books</Link>
            <Link to="/About" className="cursor-pointer text-[20px] hover:text-pink-400 hover:ml-2 transition-all">About us</Link>
          </div>

          <div className="flex gap-3">

            <Link to="/login" className="cursor-pointer rounded-md bg-pink-600 px-4 py-2 hover:bg-pink-700 transition-all">Log in</Link>

            <Link to="/signup" className="cursor-pointer rounded-md border bg-white border-pink-600 px-4 py-2 text-pink-500 hover:bg-pink-600 transition-all hover:text-white">Sign Up</Link>

          </div>
        </nav>
      </header>
      <Features />
      <BooksSlider />
      <Recomended />
      <Sale />
    </>
  )
}
