import { Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";

export default function Questions() {
    
    return (
        <>

            <div className="relative min-h-200 lg:h-197.5 w-full flex items-center justify-center py-12 px-6 sm:px-12 lg:px-30">

                <img src="./src/assets/image/bg.jpg" alt="Library" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#3B2F4A]/95 md:bg-[#3B2F4A]/90"></div>


                <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">


                    <div className="leftBox w-full order-2 lg:order-1">
                        <h2 className="font-bold text-3xl md:text-4xl text-white mb-2 text-center lg:text-start">Have a Questions?</h2>
                        <h2 className="font-bold text-3xl md:text-4xl text-white text-center lg:text-start">Get in Touch</h2>
                        <p className="text-base md:text-[18px] text-[#FFFFFF80] mt-4 mb-8 text-center lg:text-start max-w-lg mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius.
                        </p>

                        <Formik initialValues={{ name: '', email: '',message:"" }} className="space-y-4">
                            <Form>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Field name="name" type="text" placeholder="Name"
                                        className="p-3 w-full bg-white/5 border text-white border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all" />
                                    <Field name="email" type="email" placeholder="Email Address"
                                        className="p-3 w-full bg-white/5 border text-white border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all" />
                                </div>
                                <textarea placeholder="Your Message"
                                    className="bg-white/5 border h-40 p-3 w-full mt-4 text-white border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all" />

                                <button type="submit" className="w-full cursor-pointer lg:w-max bg-[#e91e63] mt-8 py-3 px-12 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all shadow-lg active:scale-95">
                                    Send Message
                                </button>
                            </Form>
                        </Formik>
                    </div>

                    <div className="rightBox w-full flex flex-col gap-8 order-1 lg:order-2">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                                <img className="w-6 md:w-8 h-6 md:h-8" src="./src/assets/image/phone.png" alt="phone" />
                            </div>
                            <span className="text-white text-lg md:text-2xl">01123456789</span>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                                <img className="w-6 md:w-8 h-6 md:h-8" src="./src/assets/image/email.png" alt="email" />
                            </div>
                            <span className="text-white text-lg md:text-2xl break-all">Example@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors text-white">
                                <img className="w-6 md:w-8 h-6 md:h-8" src="./src/assets/image/location.png" alt="location" />
                            </div>
                            <span className="text-white text-base md:text-xl leading-relaxed">
                                adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
