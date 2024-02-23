import Modal from "./Modal";
import { toggleInput } from "../../Utils/toggleInput";
import InputFiled from "../components/InputFiled";
import { useState } from "react";
import showIcon from "../assets/ShowIcon.svg";
import closeIcon from "../assets/CloseIcon.svg";

const Editmodals = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("password");
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Edit Modal</button>
      <Modal modal={showModal}>
        <div className="border flex justify-center items-center flex-col rounded-lg bg-BGColor  border-borderGradient hover:border-[#0094FF]  w-[670px] h-[532px] p-[70px]">
          <form className="w-full">
            <div className="flex justify-between mb-10">
              <h1 className="text-2xl text-White font-semibold">Edit</h1>
              <button onClick={() => setShowModal(false)}>
                <img className="w-6 h-6" src={closeIcon} alt="" />
              </button>
            </div>
            <InputFiled
              type="text"
              name="name"
              placeholder="Type your name"
              lebel="Full Name"
            />
            <InputFiled
              type="email"
              name="email"
              placeholder="Type your email"
              lebel="Email"
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
            <button className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-9">
              Save Changes
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Editmodals;
