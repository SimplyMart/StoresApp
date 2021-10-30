import { useState } from 'react';
import styles from '../../styles/LoginModal.module.scss';
import { GoogleOutlined } from '@ant-design/icons';
import { signInWithGoogle, auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/AuthUserContext';

const Login = () => {
  const router = useRouter();
  const { updateStoreId } = useAuth();
  const [loginUser, setLoginUser] = useState({
    Email: '',
    Password: '',
  });

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginUser((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const submitSignIn = async (event) => {
    event.preventDefault();

    const { Email, Password } = loginUser;

    try {
      await signInWithEmailAndPassword(auth, Email, Password).then((user) => {
        console.log('Success. The user logged in', user.uid);
        updateStoreId(user.uid);
        router.push('/dashboard');
      });
    } catch (error) {
      alert(error.message);
    }
    setLoginUser({ Email: '', Password: '' });
  };

  return (
    <div className={styles.baseContainer}>
      <div className={styles.loginHeader}>Login</div>
      <div className={styles.loginContent}>
        <div className={styles.socialContainer}>
          <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <span>Sign In with&ensp;</span>
            <GoogleOutlined />
          </button>
        </div>
        <form className={styles.loginForm} onSubmit={submitSignIn}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="Email"
              value={loginUser.Email}
              onChange={handleLoginChange}
              placeholder="Enter email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="Password"
              value={loginUser.Password}
              onChange={handleLoginChange}
              placeholder="Enter password"
            />
          </div>
          <div className={styles.btn}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
