import "./App.css";
import AddAdminModal from "./Modals/AddAdminModal";
import Editmodals from "./Modals/Editmodals";
import LoginModal from "./Modals/LoginModal";
import RemoveADminModals from "./Modals/RemoveADminModals";
import RemovewMessageModal from "./Modals/RemovewMessageModal";
import SendMessageModal from "./Modals/SendMessageModal";

function App() {
  return (
    <>
      <div className="space-y-10">
        <LoginModal />
        <AddAdminModal />
        <Editmodals />
        <RemoveADminModals />
        <SendMessageModal />
        <RemovewMessageModal />
      </div>
    </>
  );
}

export default App;
