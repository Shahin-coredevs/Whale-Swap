import { useState } from "react";
import Modal from "./Modal";
import InputFiled from "../components/InputFiled";
import showIcon from "../assets/ShowIcon.svg";
import { toggleInput } from "../../Utils/toggleInput";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("password");
  return (
    <div>
      <button onClick={() => setShowModal(true)}>LoginModal</button>
      <Modal modal={showModal}>
        <div className="border flex justify-center items-center flex-col rounded-lg bg-BGColor  hover:border-[#0094FF]  w-[670px] h-[532px] p-[70px]">
          <div className="text-center font-nunito mb-10">
            <h1 className="text-primary text-[32px] font-bold">Whale Swap</h1>
            <h5 className="text-White text-xl font-semibold">Welcome Back!</h5>
            <p className="text-bodyText text-sm">log in with Whale Swap</p>
          </div>
          <form className="w-full">
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
              Log in
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
