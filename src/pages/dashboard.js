import { useState } from 'react';
import styles from '../styles/Dashboard.module.scss';
import Drawer from '../component/Dashboard/Drawer';
import Payments from '../component/Dashboard/Payments';
import Products from '../component/Dashboard/Products';
import QRcode from '../component/Dashboard/QRcode';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/AuthUserContext';

export default function Dashboard() {
  const router = useRouter();
  const { authUser, loading } = useAuth();
  const [selectedNav, setSelectedNav] = useState(0);

  const navComponents = [
    { id: 0, component: <Payments /> },
    { id: 1, component: <Products /> },
    { id: 2, component: <QRcode /> },
  ];

  if (loading) {
    return <></>;
  }
  if (!loading && !authUser) {
    router.push('/');
    return <></>;
  }
  return (
    <div className={styles.Dashboard}>
      {/* Width 21% */}
      <Drawer selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className={styles.dashMain}>
        {navComponents[selectedNav].component}
      </div>
    </div>
  );
}
