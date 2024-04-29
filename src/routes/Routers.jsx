import { Routes, Route } from "react-router-dom";
// import Header from "../componnents/Header/Header";
import NotFound from "../componnents/NotFound/NotFound";
import Home from "../componnents/Home/Home";
import Login from "../componnents/Login/Login";
import RegisterVolunter from "../componnents/RegisterVolunter/RegisterVolunter";
import ActiveVolunter from "../componnents/ActiveVolunter/ActiveVolunter";
import Admin from "../componnents/Admin/Admin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-volunter/:id" element={<RegisterVolunter />} />
      <Route path="/event" element={<ActiveVolunter />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
