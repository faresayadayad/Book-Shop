import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainLayout from "./LayOuts/MainLayout";
import SecondLayOut from "./LayOuts/SecondLayOut";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import AddCodePage from "./pages/AddCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HeaderAfterSignUpPage from "./pages/HeaderAfterSignUpPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      {/* <ResetPasswordPage/>
    <AddCodePage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
            <Route path="/AddCode" element={<AddCodePage />} />
            <Route path="/ResetPassword" element={<ResetPasswordPage />} />
            <Route path="/HeaderAfterSignUp" element={<HeaderAfterSignUpPage />} />
          </Route>

          {/* <Route path="/" element={<SecondLayOut />}>
            <Route index element={<HeaderAfterSignUpPage />} />
          </Route> */}
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}