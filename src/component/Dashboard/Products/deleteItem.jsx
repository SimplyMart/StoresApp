import React, { useState } from "react";
import { Modal, Button, Space } from "antd";
import styles from "../../../styles/component/deleteItem.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { db } from "../../../utils/firebase";
import { useAuth } from "../../../utils/context/AuthUserContext";
import { doc, updateDoc } from "@firebase/firestore";

const { confirm } = Modal;

const DeleteItem = ({ index }) => {
  const {
    updateStoreData,
    storeData: { products },
    authUser,
  } = useAuth();
  const showPromiseConfirm = () => {
    confirm({
      title: "You sure you want to remove this item?",
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        if (authUser) {
          const storeRef = doc(db, "store", authUser.uid);
          await products.splice(index, 1);
          await updateDoc(storeRef, {
            products,
          });
          updateStoreData({ products });
        }
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };
  return (
    <Space wrap>
      <div className={styles.deleteContainer}>
        <Button className={styles.deleteButton} onClick={showPromiseConfirm}>
          Delete
        </Button>
      </div>
    </Space>
  );
};

export default DeleteItem;
