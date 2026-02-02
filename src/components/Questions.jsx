import { Field, Formik } from "formik";
// import { Link } from "react-router-dom";

export default function Questions() {
    return (
        <>

            <div className="relative flex h-197.5 w-ful p-30">
                <img src="./src/assets/image/bg.jpg" alt="Library" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#3B2F4A]/90"></div>

                <div className="leftBox absolute ">
                    <h2 className="font-bold text-4xl text-white mb-4">Have a Questions?</h2>
                    <h2 className="font-bold text-4xl text-white">Get in Touch</h2>
                    <p className="text-[18px] w-148 text-[#FFFFFF80] mt-4 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>

                    <Formik className="space-y-4 max-w-xl outline-offset-2 outline-red-500">

                        <div className="">
                            <div className="flex gap-4">
                                <Field type="text" placeholder="Name" className="bg-white/5 mt-4 w-71 px-4 py-2 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />

                                <Field type="email" placeholder="Email Address" className="bg-white/5 mt-4 w-71 px-4 py-2 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <textarea type="text" placeholder="Your Message" className=" mt-4 w-full h-38 px-4 py-2 bg-white/5 border text-white border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                            />

                        </div>
                    </Formik>
                    <button className="bg-[#e91e63] cursor-pointer m-auto mt-8 justify-center flex items-center hover:bg-pink-700 text-white font-semibold py-3 px-10 rounded-lg transition-all shadow-lg active:scale-95">
                        Send Message
                    </button>

                </div>

                <div className="rightBox absolute ">
                    <div className="phone flex items-center gap-4 ml-240">
                        <img className="text-pink-600 w-14 h-14" src="./src/assets/image/phone.png" alt="phone" />
                        <span className="text-white text-2xl">01123456789</span>
                    </div>

                    <div className="email flex items-center gap-4 my-5 ml-240">
                        <img className="text-pink-600 w-14 h-14" src="./src/assets/image/email.png" alt="phone" />
                        <span className="text-white text-2xl">Example@gmail.com</span>
                    </div>

                    <div className="location flex items-center gap-4 ml-240">
                        <img className="text-pink-600 w-14 h-14" src="./src/assets/image/location.png" alt="phone" />
                        <span className="text-white text-2xl">adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,</span>
                    </div>

                </div>
            </div>

        </>
    )
}
