import styles from '../styles/Dashboard.module.scss';
import Drawer from '../component/Dashboard/Drawer';
import Payments from '../component/Dashboard/Payments';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/AuthUserContext';

export default function Dashboard() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  console.log(authUser);

  if (!loading && !authUser) {
    router.push('/');
    return <></>;
  }

  return (
    <div className={styles.Dashboard}>
      {/* Width 21% */}
      <Drawer />
      <div className={styles.dashMain}>{/* <Payments /> */}</div>
    </div>
  );
}
