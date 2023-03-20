import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import useTheme from "../hooks/useTheme";

const RootLayout = () => {
   useTheme();

   return (
      <>
         <NavBar />
         <div className="wrapped">
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default RootLayout;
