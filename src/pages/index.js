import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Logo from "../component/Logo";
import LoginModal from "../component/LoginModal/LoginModal";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Home Page</title>
      </Head>
      <section className={styles.main}>
        <Logo />
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit ametidsm consectetur adipisicing elit.
            Voluptatem, maxime.
          </p>
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
