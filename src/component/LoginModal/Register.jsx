import { useState } from 'react';
import styles from '../../styles/LoginModal.module.scss';
import { db, auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { Button } from 'antd';

const Register = () => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [signUpUser, setSignUpUser] = useState({
    Name: '',
    Email: '',
    Password: '',
  });

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpUser((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const submitSignUp = async (event) => {
    event.preventDefault();
    setSubmitLoading(true);
    const { Name, Email, Password } = signUpUser;

    const result = await createUserWithEmailAndPassword(auth, Email, Password);
    if (!result) return;
    const user = result?.user;

    // Initialise store
    await setDoc(doc(collection(db, 'store'), user.uid), {
      storeName: '',
      ownerName: '',
      address: '',
      phoneNumber: '',
      profileUrl: null,
      qrcode: `http://api.qrserver.com/v1/create-qr-code/?data=${user.uid}`,
    });
    await setDoc(doc(collection(db, 'admin'), user.uid), {
      name: Name,
      email: Email,
      storeId: user.uid,
    });
    console.log('Success. New user created in Firebase');
    setSignUpUser({
      Name: '',
      Email: '',
      Password: '',
    });
    setSubmitLoading(false);
    router.push('/dashboard');
  };
  return (
    <div className={styles.baseContainer}>
      <div className={styles.loginHeader}>Register</div>
      <div className={styles.loginContent}>
        <form className={styles.loginForm} onSubmit={submitSignUp}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="Name"
              value={signUpUser.Name}
              onChange={handleSignUpChange}
              placeholder="Enter username"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              value={signUpUser.Email}
              onChange={handleSignUpChange}
              placeholder="Enter email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="Password"
              value={signUpUser.Password}
              onChange={handleSignUpChange}
              placeholder="Enter password"
            />
          </div>
          <div className={styles.btn}>
            <Button htmlType="submit" loading={submitLoading}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
