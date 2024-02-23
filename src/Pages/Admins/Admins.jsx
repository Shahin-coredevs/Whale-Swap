import { adminData } from "../../../Utils/data";
import Table from "../../components/Table";

const Admins = () => {
    const headers= ["Id","Admin name","Admin Email", "Action"]
  return (
    <div className="CardBG ">
      <Table headers={headers} admindata={adminData} />
      
    </div>
  );
};

export default Admins;
