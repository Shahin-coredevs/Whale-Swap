import Modal from "./Modal";
import InputFiled from "../components/InputFiled";
import { useState } from "react";

import closeIcon from "../assets/CloseIcon.svg";

const SendMessageModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Send Messages Modal</button>
      <Modal modal={showModal}>
        <div className="border flex justify-center items-center flex-col rounded-lg bg-BGColor  border-borderGradient hover:border-[#0094FF]  w-[670px] h-[680px] p-[70px]">
          <form className="w-full">
            <div className="flex justify-between mb-10">
              <h1 className="text-2xl text-White font-semibold">
                Send Message To All Users
              </h1>
              <button onClick={() => setShowModal(false)}>
                <img className="w-6 h-6" src={closeIcon} alt="" />
              </button>
            </div>
            <div className="mb-3">
              <p className="text-white mb-3">Message</p>
              <textarea
                className="w-full h-52 bg-BGColor text-white p-4 rounded-lg border border-[#ffffff14] resize-none placeholder:text-bodyText"
                placeholder="Type your message"
              />
            </div>
            <InputFiled
              type="date"
              name="date"
              placeholder="Pick message delete date"
              lebel="Date"
            />
            <InputFiled
              type="date"
              name="date"
              placeholder="Pick message delete date"
              lebel="Date"
            />
            <button className="bg-primary w-[530px] h-12 rounded-lg text-White text-lg font-medium mt-9">
              Send Message To All Users
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SendMessageModal;
