import NavLinkItem from "../../atoms/NavLinks/NavLinkItem/NavLinkItem";
import "./footer.scss";

const Footer: React.FC = () => {
   return (
      <footer className="footer">
         <div className="lead"></div>
         <div className="links">
            <NavLinkItem to="/" name="Home" />
            <NavLinkItem to="/register" name="Register" />
            <NavLinkItem to="/login" name="Login" />
            <NavLinkItem to="/my-profile" name="My Profile" />
         </div>
      </footer>
   );
};

export default Footer;
