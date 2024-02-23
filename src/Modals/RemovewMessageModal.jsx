import { useState } from "react";
import Modal from "./Modal";

const RemovewMessageModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Remove Admin</button>
      <Modal modal={showModal}>
        <div className="w-[500px] h-60 border rounded-lg">
          <div className="py-10 px-12">
            <h1 className="text-2xl text-White text-center">
              Are your sure you want to remove this message.
            </h1>
            <div className="flex justify-center gap-5 mt-12">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg px-6 py-2 text-lg font-semibold text-White border border-[#FFFFFF] w-[100px] h-12 "
              >
                Cancel
              </button>
              <button className="w-[100px] h-12 bg-error rounded-lg px-6 py-2 text-lg font-semibold text-White">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RemovewMessageModal;
