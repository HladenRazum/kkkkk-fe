type MenuBtnProps = {
   onClick: () => void;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ onClick }) => {
   return (
      <button type="button" onClick={onClick}>
         Menu Btn
      </button>
   );
};

export default MenuBtn;
