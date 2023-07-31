import React, { Suspense } from "react";
import CommonPageHeader from "../../../Component/CommonPageHeader/CommonPageHeader";
import { useState } from "react";
import Modal from "../../../Component/Modal/Modal";
import AddBrand from "./AddBrand";

const Brand = () => {
  const title = "Brand";
  const types = "Brand";
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CommonPageHeader
        title={title}
        subTitle={title}
        setShowModal={setShowModal}
      />
      
      
      {showModal && (
        <Suspense fallback={<div></div>}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            header={"Add Brand Details"}
            types={types}
            size={"modal-lg "}
          >
            <AddBrand setShowModal={setShowModal}/>
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default Brand;
