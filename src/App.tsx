import ThemeSwitch from "./components/features/ThemeSwitch/ThemeSwitch";
import useTheme from "./hooks/useTheme";

const App = () => {
   useTheme();

   return (
      <div>
         <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            autem commodi nisi!
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam
            delectus nihil temporibus possimus, recusandae ab vel, fuga
            inventore veniam fugiat corrupti vitae, perspiciatis ex. Enim, quia
            qui esse architecto libero molestias magnam.
         </p>
         <ThemeSwitch />
      </div>
   );
};

export default App;
