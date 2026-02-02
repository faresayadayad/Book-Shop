import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgetPassword() {
    const handleForgetPassword = async (values) => {

        try {
            const res = await axios.post("https://bookstore.eraasoft.pro/api/forget-password", values);
            console.log(res);
        } catch (error) {
            console.log(error);

        }
    }

    const ForgetPasswordSchema = Yup.object({
        email: Yup.string().required().email("الايميل مطلوب")
        });

    return (
        <>

            <Formik initialValues={{ email: ""}} validationSchema={ForgetPasswordSchema} onSubmit={(values) => { handleForgetPassword(values) }}>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-lg">
                        <h2 className='flex items-center justify-center mb-4 text-[#D9176C] font-bold'>Forget Password?</h2>
                        <p className='flex items-center justify-center mb-10 text-[#22222280]'>Enter your email to reset your password</p>
                        <Form className="space-y-4">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                <Field name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                            </div>

                           
                           
                            <button type='submit' to="/AddCode" className="w-full cursor-pointer bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 mt-4 rounded-lg shadow-md transition-colors duration-300">
                                Send reset code
                            </button>
                            {/* <Link type="submit" to="/AddCode" className=" w-full cursor-pointer bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold py-3 mt-4 rounded-lg shadow-md transition-colors duration-300">Send reset code</Link> */}
                        </Form>

                       

                    </div>
                </div>
            </Formik>
        </>
    );
};

