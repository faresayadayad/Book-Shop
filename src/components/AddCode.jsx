import {Form, Formik } from "formik"
import { Link } from "react-router-dom"

export default function AddCode() {
    return (
        <>
            <Formik>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-lg">
                        <h2 className='flex items-center justify-center mb-4 text-[#D9176C] font-bold'>Reset your password!</h2>
                        <p className='flex items-center  justify-center mb-10 text-[#22222280]'>Enter the 4 dights code that you received on your email</p>
                        <Form className="space-y-4">


                            <div className="sm:flex gap-3 justify-center p-10 bg-[#f9f9f9] rounded-4xl">
                                <input
                                    type="text"
                                    maxLength="1"
                                    className={`mb-3 mx-3 sm:mx-0 w-17.5 h-17.5 text-center text-2xl font-medium rounded-[18px] bg-white border-[1.5px] outline-none transition-all duration-200 read-only:cursor-default
                                        focus:border-black border-gray-300 focus:ring-0 valid:border-black`}
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className={`mb-3 mx-3 sm:mx-0 w-17.5 h-17.5 text-center text-2xl font-medium rounded-[18px] bg-white border-[1.5px] outline-none transition-all duration-200 read-only:cursor-default
                                        focus:border-black border-gray-300 focus:ring-0 valid:border-black`}
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className={`mb-3 mx-3 sm:mx-0 w-17.5 h-17.5 text-center text-2xl font-medium rounded-[18px] bg-white border-[1.5px] outline-none transition-all duration-200 read-only:cursor-default
                                        focus:border-black border-gray-300 focus:ring-0 valid:border-black`}
                                />
                                <input
                                    type="text"
                                    maxLength="1"
                                    className={`mb-3 mx-3 sm:mx-0 w-17.5 h-17.5 text-center text-2xl font-medium rounded-[18px] bg-white border-[1.5px] outline-none transition-all duration-200 read-only:cursor-default
                                        focus:border-black border-gray-300 focus:ring-0 valid:border-black`}
                                />
                            </div>

                            <button type='submit' className="w-full cursor-pointer bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 mt-4 rounded-lg shadow-md transition-colors duration-300">
                                Reset password
                            </button>
                            <p className="text-center text-gray-600 mt-6 text-sm">
                                Didn’t receive a code? 
                                <Link type="submit" to="/ForgetPassword" className="text-pink-600 font-semibold cursor-pointer hover:underline">Send again</Link>
                            </p>
                        </Form>



                    </div>
                </div>
            </Formik>
        </>
    )
}
