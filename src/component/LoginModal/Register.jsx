import { useState } from 'react';
import styles from '../../styles/LoginModal.module.scss';
import { db, auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/AuthUserContext';

const Register = () => {
  const router = useRouter();
  const { updateStoreID } = useAuth();
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
    const { Name, Email, Password } = signUpUser;

    try {
      createUserWithEmailAndPassword(auth, Email, Password)
        .then(async (result) => {
          console.log(result);
          const user = result.user;
          await setDoc(doc(collection(db, 'store'), user.uid), {
            storeName: '',
            ownerName: '',
            addressName: '',
            phoneNumber: null,
          });
          await setDoc(doc(collection(db, 'admin'), user.uid), {
            name: Name,
            email: Email,
            storeId: user.uid,
          });
          updateStoreID(user.uid);
        })
        .then(() => {
          console.log('Success. New user created in Firebase');
          router.push('/dashboard');
        })
        .catch((error) => alert(error.message));

      setSignUpUser({
        Name: '',
        Email: '',
        Password: '',
      });
    } catch (error) {
      console.error(error);
    }
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
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
