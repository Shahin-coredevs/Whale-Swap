import { useState } from "react";
import Modal from "./Modal";
import InputFiled from "../components/InputFiled";
import closeIcon from "../assets/CloseIcon.svg";
import showIcon from "../assets/ShowIcon.svg";
import { toggleInput } from "../../Utils/toggleInput";

const AddAdminModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("password");
  const [typeC, setTypeC] = useState("password");
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add New Admin</button>
      <Modal modal={showModal}>
        <div className="border flex justify-center items-center flex-col p-5 rounded-lg bg-BGColor border-borderGradient w-[670px] h-[623px]">
          <form className="p-[50px] w-full">
            <div className="flex justify-between mb-10">
              <h1 className="text-2xl text-White font-semibold">
                Add New Admin
              </h1>
              <button onClick={() => setShowModal(false)}>
                <img className="w-6 h-6" src={closeIcon} alt="" />
              </button>
            </div>
            <InputFiled
              lebel="Full Name"
              type="text"
              name="name"
              placeholder="Type your full name"
            />
            <InputFiled
              lebel="Email"
              type="email"
              name="email"
              placeholder="Type your email"
            />
            <InputFiled
              lebel="Password"
              type={type}
              name="password"
              placeholder="Type your password"
            />
            <button
              onClick={() => toggleInput(type, setType)}
              className="absolute"
            >
              <img
                className="relative lg:bottom-11 lg:left-[490px]"
                src={showIcon}
                alt=""
              />
            </button>

            <InputFiled
              lebel="Confirm Password"
              type={typeC}
              name="confirmPassword"
              placeholder="Type your confirm password"
            />
            <button
              onClick={() => toggleInput(typeC, setTypeC)}
              className="absolute"
            >
              <img
                className="relative lg:bottom-11 lg:left-[490px]"
                src={showIcon}
                alt=""
              />
            </button>

            <button className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-12">
              Confirm To Add New Admin
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddAdminModal;
