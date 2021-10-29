import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Logo from '../component/Logo';
import { Typography, Button } from 'antd';

const { Title, Text } = Typography;

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
          <div className={styles.authBtns}>
            <Link href="/login">
              <Button type="primary">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button type="primary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.overlay} />
        <iframe src="https://embed.lottiefiles.com/animation/36605"></iframe>
      </section>
    </div>
  );
}
