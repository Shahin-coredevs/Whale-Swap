import { Route, Routes } from "react-router-dom";
import Admins from "../Pages/Admins/Admins";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admins />} />
      </Routes>
    </div>
  );
};

export default Routers;
