import { useRef } from "react";
import "./menu-btn.scss";

type MenuBtnProps = {
   onClick: () => void;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ onClick }) => {
   const buttonRef = useRef<HTMLButtonElement>(null);

   const handleClick = () => {
      onClick();
      buttonRef.current?.classList.toggle("active");
   };

   return (
      <button
         title="settings"
         className="menu-btn"
         type="button"
         onClick={handleClick}
         ref={buttonRef}
      >
         <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
         >
            <style type="text/css"></style>
            <g>
               <rect className="st0" width="128" height="128" />
               <rect x="192" className="st0" width="128" height="128" />
               <rect x="384" className="st0" width="128" height="128" />
               <rect y="192" className="st0" width="128" height="128" />
               <rect x="192" y="192" className="st0" width="128" height="128" />
               <rect x="384" y="192" className="st0" width="128" height="128" />
               <rect y="384" className="st0" width="128" height="128" />
               <rect x="192" y="384" className="st0" width="128" height="128" />
               <rect x="384" y="384" className="st0" width="128" height="128" />
            </g>
         </svg>
      </button>
   );
};

export default MenuBtn;
