import Head from 'next/head';
import LoginModal from '../component/LoginModal/LoginModal';
import styles from '../styles/Home.module.scss'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <LoginModal />
      </div>
    </div>
  );
}
