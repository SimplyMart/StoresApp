import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Logo from '../component/Logo';
import LoginModal from '../component/LoginModal/LoginModal';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Home Page</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <section className={styles.main}>
        <Logo />
        <div className={styles.content}>
          <p>We bring you the fastest and the smartest shopping experience!</p>
          <LoginModal />
        </div>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.overlay} />
        <iframe src="https://embed.lottiefiles.com/animation/36605"></iframe>
      </section>
    </div>
  );
}
