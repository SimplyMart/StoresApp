import { useState } from 'react';
import styles from '../../styles/LoginModal.module.scss';
import { Modal, Button } from 'antd';
import Register from './Register';
import Login from './Login';

const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.authBtns}>
      <Button type="primary" className="normalBtn" onClick={showModal}>
        Get Started
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {toggleLogin ? <Login /> : <Register />}
        <div className={styles.switchUser}>
          <p>
            {toggleLogin ? 'New User?' : 'Existing User?'}
            <span onClick={() => setToggleLogin(!toggleLogin)}>
              {toggleLogin ? ' Register' : ' Login'}
            </span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
