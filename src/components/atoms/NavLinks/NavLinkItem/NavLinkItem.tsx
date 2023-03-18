import { NavLink } from "react-router-dom";
import "./nav-link-item.scss";

type NavLinkProps = {
   name: string;
   to: string;
};

const NavLinkItem: React.FC<NavLinkProps> = ({ name, to }) => (
   <li>
      <NavLink className="nav-link-item" to={to}>
         {name}
      </NavLink>
   </li>
);

export default NavLinkItem;
