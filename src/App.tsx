import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
         <Route path="/register" element={<Register />} />
      </Route>
   )
);

const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
