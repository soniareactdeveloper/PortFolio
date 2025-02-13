import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePg from "./Pages/HomePg";
import AboutPg from "./Pages/AboutPg";
import "./App.css";

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePg />} />
        <Route path="about" element={<AboutPg />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
