import { Modal, Button } from "antd";
import { useState } from "react";
import styles from "../../styles/component/editItem.module.scss";
const EditItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={styles.editContainer}>
      <Button className={styles.editButton} onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="EDIT"
        centered
        visible={isModalVisible}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div className={styles.editForm}>
          <form>
            <div className={styles.editFormDetail}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Item Name" required />
            </div>
            <div className={styles.editFormDetail}>
              <label htmlFor="price">Price</label>
              <input id="price" type="Number" placeholder="Price" required />
            </div>
            <div className={styles.editFormDetail}>
              <label htmlFor="stock">Stock</label>
              <input id="stock" type="Number" placeholder="Stock" required />
            </div>
            <div className={styles.editFormButton}>
              <Button type="primary">Save Changes</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditItem;
