import { Modal, Button } from 'antd';
import { useState } from 'react';
import styles from '../../../styles/component/editItem.module.scss';
import { doc, updateDoc } from '@firebase/firestore';
import { useAuth } from '../../../utils/context/AuthUserContext';
import { db } from '../../../utils/firebase';

const EditItem = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const {
    authUser,
    loading,
    updateStoreData,
    storeData: { products },
  } = useAuth();
  const [details, setDetails] = useState({
    itemName: data.itemName,
    price: data.price,
    stock: data.stock,
    index: data.index,
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
    setSubmitLoading(true);
    const { itemName, price, stock, index } = details;
    console.log(products);
    products[index] = { ...products[index], itemName, price, stock };
    try {
      const storeRef = doc(db, 'store', authUser.uid);
      await updateDoc(storeRef, {
        products,
      });
      updateStoreData({ products });
      handleCancel();
    } catch (error) {
      setSubmitLoading(false);
      alert(error.message);
    }
    setSubmitLoading(false);
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
                name="itemName"
                type="text"
                placeholder="Item Name"
                value={details.itemName}
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
              <Button htmlType="submit" loading={submitLoading}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditItem;
