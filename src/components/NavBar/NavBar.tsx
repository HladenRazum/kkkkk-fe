import NavLinks from "../atoms/NavLinks/NavLinks";
import "./navbar.scss";

const NavBar = () => {
   return (
      <div className="bb">
         <nav className="navbar">
            <span>Logo</span>
            <NavLinks />
         </nav>
      </div>
   );
};

export default NavBar;
