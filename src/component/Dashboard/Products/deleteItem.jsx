import React, { useState } from "react";
import { Modal, Button, Space } from "antd";
import styles from "../../../styles/component/deleteItem.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const DeleteItem = ({ index }) => {
  const showPromiseConfirm = () => {
    confirm({
      title: "You sure you want to remove this item?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
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
