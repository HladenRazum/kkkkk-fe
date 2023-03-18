import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import useTheme from "../hooks/useTheme";

const RootLayout = () => {
   useTheme();

   return (
      <>
         <NavBar />
         <Outlet />
      </>
   );
};

export default RootLayout;
