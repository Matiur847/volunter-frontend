import { Routes, Route } from "react-router-dom";
// import Header from "../componnents/Header/Header";
import NotFound from "../componnents/NotFound/NotFound";
import Home from "../componnents/Home/Home";
import Login from "../componnents/Login/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
