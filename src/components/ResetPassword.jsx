import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function ResetPassword() {
    const handleResetPassword = async (values) => {

        try {
            const res = await axios.post("https://bookstore.eraasoft.pro/api/forget-password", values);
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    const ResetPasswordSchema = Yup.object({
        Password: Yup.string().min(8, "Must be at least 8 characterss").required("الباسورد مطلوب"),
        password_confirmation: Yup.string().min(8, "Must be at least 8 characterss").required("برجاء تأكيد الباسورد"),
        terms: false
    });
    return (
        <>
            <Formik initialValues={{ Password: "", password_confirmation: "", terms: false }} validationSchema={ResetPasswordSchema} onSubmit={(values) => { handleResetPassword(values) }}>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-lg">
                        <h2 className='flex items-center justify-center mb-4 text-[#D9176C] font-bold'>Create new password!</h2>
                        <p className='flex items-center justify-center mb-1 text-[#22222280]'>Create a strong password</p>
                        <p className='flex items-center justify-center mb-10 text-[#22222280]'>Your new password must be different from previous one</p>
                        <Form className="space-y-4">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                                <Field name="Password"
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                                <ErrorMessage name="Password" component="div" className="text-red-500 text-xs" />

                                <label className="block text-sm font-semibold text-gray-700 mt-4 mb-1">Confirm Password</label>
                                <Field name="password_confirmation"
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                                <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-xs" />

                                <div className="flex items-center gap-2 py-2">
                                    <Field type="checkbox" name="terms" id="terms" className="w-4 h-4 border-gray-300 rounded text-pink-600 focus:ring-pink-500 cursor-pointer" />
                                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                                        Remember me
                                    </label>
                                </div>

                            </div>



                            <button type='submit' className="w-full cursor-pointer bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 mt-4 rounded-lg shadow-md transition-colors duration-300">
                                Reset password
                            </button>
                            {/* <Link type="submit" to="/AddCodePage" className=" cursor-pointer bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 mt-4 rounded-lg shadow-md transition-colors duration-300">Send reset code</Link> */}
                        </Form>



                    </div>
                </div>
            </Formik>
        </>
    )
}
