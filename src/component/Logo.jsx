import styles from '../styles/Home.module.scss';

export default function Logo({ classes }) {
  return (
    <div className={`${styles.Logo} ${classes}`}>
      <img src="/images/logo-illus.png" alt="logo" />
      <img src="/images/logo-title.png" alt="title" />
    </div>
  );
}
