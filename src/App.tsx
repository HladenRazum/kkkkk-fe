import NavBar from "./components/NavBar/NavBar";
import useTheme from "./hooks/useTheme";

const App = () => {
   useTheme();

   return (
      <div>
         <NavBar />
      </div>
   );
};

export default App;
