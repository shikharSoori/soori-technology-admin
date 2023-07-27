import React, { Suspense } from "react";
import CommonPageHeader from "../../Component/CommonPageHeader/CommonPageHeader";
import { useState } from "react";
import Modal from "../../Component/Modal/Modal";
import AddProduct from "./AddProduct";

const Product = () => {
  const title = "Product";
  const types = "Product";
  const [showModal, setShowModal] = useState(false);

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
            header={"Add Product Details"}
            types={types}
            size={"modal-lg "}
          >
            <AddProduct />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default Product;
