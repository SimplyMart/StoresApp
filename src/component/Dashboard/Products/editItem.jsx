import { Modal, Button } from 'antd';
import { useState } from 'react';
import styles from '../../../styles/component/editItem.module.scss';

const EditItem = ({ name, price, stock }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [details, setDetails] = useState({
    name: ' ',
    price: ' ',
    stock: ' ',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const submitEditForm = async (event) => {
    event.preventDefault();

    const { name, price, stock } = details;

    try {
    } catch (error) {
      alert(error.message);
    }
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
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div className={styles.editForm}>
          <form onSubmit={submitEditForm}>
            <div className={styles.editFormDetail}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Item Name"
                value={details.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.editFormDetail}>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="Number"
                name="price"
                value={details.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
            </div>
            <div className={styles.editFormDetail}>
              <label htmlFor="stock">Stock</label>
              <input
                id="stock"
                name="stock"
                type="Number"
                value={details.stock}
                onChange={handleChange}
                placeholder="Stock"
                required
              />
            </div>
            <div className={styles.editFormButton}>
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditItem;
