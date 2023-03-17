import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../store/user/user.slice";

const useTheme = () => {
   const theme = useSelector(getTheme);

   useEffect(() => {
      document.body.setAttribute("class", theme);
   }, []);
};

export default useTheme;
