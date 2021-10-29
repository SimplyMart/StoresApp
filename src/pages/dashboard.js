import styles from '../styles/Dashboard.module.scss';
import Drawer from '../component/Drawer';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <Drawer />
    </div>
  );
}
