import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.scss';
import Drawer from '../component/Dashboard/Drawer';
import Payments from '../component/Dashboard/Payments';
import Products from '../component/Dashboard/Products';
import Profile from '../component/Dashboard/Profile';
import AddProductItem from '../component/Dashboard/Products/addItem';
import Head from 'next/head';
import QRcode from '../component/Dashboard/QRcode';
import { useAuth } from '../utils/context/AuthUserContext';
import { message } from 'antd';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../utils/firebase';

export default function Dashboard() {
  const router = useRouter();
  const { authUser, loading, updateStoreData, storeData } = useAuth();
  const [selectedNav, setSelectedNav] = useState(0);

  useEffect(() => {
    const getStore = async () => {
      message.info('Loading store data!');

      const docSnap = await getDoc(doc(db, 'store', authUser.uid));

      if (docSnap.exists()) {
        updateStoreData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    if (authUser) getStore();
  }, [authUser]);

  const navComponents = [
    { id: 0, component: <Payments /> },
    {
      id: 1,
      component: (
        <Products selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      ),
    },
    { id: 2, component: <QRcode /> },
    { id: 3, component: <Profile /> },
    { id: 4, component: <AddProductItem /> },
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
      <Head>
        <title>Dashboard</title>
      </Head>
      <Drawer selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className={styles.dashMain}>
        {navComponents[selectedNav].component}
      </div>
    </div>
  );
}
