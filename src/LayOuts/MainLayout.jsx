import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderAfterSignUp from "../components/HeaderAfterSignUp";

export default function MainLayout() {
  // const MainLayout = ({ children }) => {
  //   const location = useLocation();

  //   const HeaderAfterSignUpPage = location.pathname === '/HeaderAfterSignUpPage';

    return (
      <>
        {/* {HeaderAfterSignUpPage ? <HeaderAfterSignUpPage /> : <Header />}
        <main>{children}</main> */}
        {/* <Header /> */}
        {/* <HeaderAfterSignUp /> */}
        <Outlet />
        <Footer />
      </>
    )
  }

// };