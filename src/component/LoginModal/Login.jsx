import { useState } from 'react';
import styles from '../../styles/LoginModal.module.scss';
import { GooglePlusOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div className={styles.baseContainer}>
            <div className={styles.loginHeader}>
                Login
            </div>
            <div className={styles.loginContent}>
                <div className={styles.socialContainer}>
                    <button onClick={()=>alert('Hello')}> <GooglePlusOutlined /></button>
                </div>
                <div className={styles.loginForm}>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className={styles.btn}>
                            <button >
                                Login
                            </button>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}

export default Login
