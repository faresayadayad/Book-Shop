import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

export default function Signup() {
    const handleSignup = async (values) => {

        try {
            const res = await axios.post("https://bookstore.eraasoft.pro/api/register", values);
            console.log("Success:", res.data);
        } catch (error) {
            console.log("Server Error:", error);

        }
    }

    const signupSchema = Yup.object({
        first_name: Yup.string().required("الاسم الأول مطلوب"),
        last_name: Yup.string().required("الاسم الأخير مطلوب"),
        email: Yup.string().required().email("الايميل مطلوب"),
        password: Yup.string().min(6, "الباسورد قصير جداً").required("الباسورد مطلوب"),
        password_confirmation: Yup.string().min(6, "الباسورد قصير جداً").required("الباسورد مطلوب"),
        terms: false
    });
    return (
        <>
            <Formik initialValues={{ first_name: "", last_name: "", email: "", password: "", password_confirmation: "",terms:false }} validationSchema={signupSchema} onSubmit={(values) => { handleSignup(values) }}>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-lg">

                        <Form className="space-y-4">

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                    <Field name="first_name"
                                        type="text"
                                        placeholder="Enter First Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <ErrorMessage name="first_name" component="div" className="text-red-500 text-xs" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                    <Field name="last_name"
                                        type="text"
                                        placeholder="Enter Last Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <ErrorMessage name="last_name" component="div" className="text-red-500 text-xs" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                <Field name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Field name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                                    <button type="button" className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm password</label>
                                <div className="relative">
                                    <Field name="password_confirmation"
                                        type="password"
                                        placeholder="Enter password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    />
                                    <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-xs" />
                                    <button type="button" className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <Field type="checkbox" name="terms" id="terms" className="w-4 h-4 border-gray-300 rounded text-pink-600 focus:ring-pink-500 cursor-pointer" />
                                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                                    Agree with <span className="text-pink-600 hover:underline cursor-pointer">Terms & Conditions</span>
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300">
                                Sign Up
                            </button>
                        </Form>

                        <p className="text-center text-gray-600 mt-6 text-sm">
                            Already have an account? <span className="text-pink-600 font-semibold cursor-pointer hover:underline">Login</span>
                        </p>

                        <div className="relative my-8 text-center">
                            <hr className="border-gray-200" />
                            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-4 text-gray-400 text-sm italic">or</span>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
                                <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="facebook" />
                                <span className="text-sm font-medium text-gray-700">Sign up with Facebook</span>
                            </button>
                        </div>

                    </div>
                </div>
            </Formik>
        </>
    );
};

