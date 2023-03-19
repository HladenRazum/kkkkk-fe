import { NavLink } from "react-router-dom";
import "./nav-link-item.scss";

type NavLinkProps = {
   name: string;
   to: string;
};

const NavLinkItem: React.FC<NavLinkProps> = ({ name, to }) => (
   <li className="nav-link-item">
      <NavLink to={to}>{name}</NavLink>
   </li>
);

export default NavLinkItem;
