import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { getTheme } from "../../../store/user/user.slice";
import { Theme } from "../../../types/theme.type";

const ThemeSwitch: React.FC = () => {
   const theme = useSelector(getTheme);

   const dispatch = useDispatch();

   const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(userSlice.actions.changeTheme(e.target.value as Theme));
   };

   return (
      <select
         defaultValue={theme}
         title="Theme switch"
         name="Theme switch"
         onChange={onChange}
      >
         <option value="light">Light</option>
         <option value="dark">Dark</option>
         <option value="high-contrast">High-contrast</option>
         <option value="grayscale">Grayscale</option>
      </select>
   );
};

export default ThemeSwitch;
