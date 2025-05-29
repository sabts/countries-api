import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Country from "../pages/country/country";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:countryName" element={<Country />} />
        </Route>
      </Routes>
      {/*Rutas dinamicas */}
    </>
  );
};
export default Router;