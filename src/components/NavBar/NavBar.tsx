import ThemeSwitch from "../features/ThemeSwitch/ThemeSwitch";
import "./navbar.scss";

const NavBar = () => {
   return (
      <nav className="navbar bb pb-1">
         <span>Logo</span>
         <ul>Nav Links</ul>
         <ThemeSwitch />
      </nav>
   );
};

export default NavBar;
