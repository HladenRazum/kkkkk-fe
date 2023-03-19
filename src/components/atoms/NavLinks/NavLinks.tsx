import { useRef } from "react";
import ThemeSwitch from "../../features/ThemeSwitch/ThemeSwitch";
import MenuBtn from "../MenuBtn/MenuBtn";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
import "./navlinks.scss";

const NavLinks: React.FC = () => {
   const linksRef = useRef<HTMLUListElement>(null);

   const toggleMenu = () => {
      linksRef.current?.classList.toggle("active");
   };

   return (
      <>
         <MenuBtn onClick={toggleMenu} />
         <ul ref={linksRef} className="nav-links">
            <NavLinkItem to="/" name="Home" />
            <NavLinkItem to="/register" name="Register" />
            <NavLinkItem to="/login" name="Login" />
            <NavLinkItem to="/my-profile" name="My Profile" />
            <li>
               <ThemeSwitch />
            </li>
         </ul>
      </>
   );
};

export default NavLinks;
