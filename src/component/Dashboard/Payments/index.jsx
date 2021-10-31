import { useState, useEffect } from 'react';
import styles from '../../../styles/component/Payments.module.scss';
import { Typography, Divider, message } from 'antd';
import PaymentCard from './PaymentCard';
import { useAuth } from '../../../utils/context/AuthUserContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

const { Title } = Typography;

export default function Payments() {
  const { authUser } = useAuth();
  const [paymentsData, setPaymentsData] = useState({});

  const dummy = [
    {
      id: 0,
      data: {
        username: 'Ankit Goel',
        items: [
          { id: 0, itemname: 'Turture', quantity: 4, price: 20, cost: 80 },
          { id: 1, itemname: 'Momos', quantity: 4, price: 20, cost: 80 },
          { id: 2, itemname: 'Lays', quantity: 4, price: 20, cost: 80 },
          { id: 3, itemname: 'Shampoo', quantity: 4, price: 20, cost: 80 },
          { id: 4, itemname: 'Water Bottle', quantity: 4, price: 20, cost: 80 },
        ],
        cost: 2504,
        purchasedOn: new Date(),
        phoneNumber: '1213142121',
      },
    },
    {
      id: 1,
      data: {
        username: 'Disha Bhardwaj',
        items: [
          { id: 0, itemname: 'Turture', quantity: 4, price: 20, cost: 80 },
          { id: 1, itemname: 'Momos', quantity: 4, price: 20, cost: 80 },
          { id: 2, itemname: 'Lays', quantity: 4, price: 20, cost: 80 },
          { id: 3, itemname: 'Shampoo', quantity: 4, price: 20, cost: 80 },
          { id: 4, itemname: 'Water Bottle', quantity: 4, price: 20, cost: 80 },
          { id: 5, itemname: 'Water Bottle', quantity: 4, price: 20, cost: 80 },
          { id: 6, itemname: 'Turture', quantity: 4, price: 20, cost: 80 },
          { id: 7, itemname: 'Momos', quantity: 4, price: 20, cost: 80 },
          { id: 8, itemname: 'Lays', quantity: 4, price: 20, cost: 80 },
          { id: 9, itemname: 'Shampoo', quantity: 4, price: 20, cost: 80 },
          {
            id: 10,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
          {
            id: 11,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
          {
            id: 12,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
          {
            id: 13,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
          {
            id: 14,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
          {
            id: 15,
            itemname: 'Water Bottle',
            quantity: 4,
            price: 20,
            cost: 80,
          },
        ],
        cost: 8012,
        purchasedOn: new Date(),
        phoneNumber: '1213142121',
      },
    },
  ];

  useEffect(() => {
    const getData = async () => {
      message.info('Loading payments');

      const paymentQuery = query(
        collection(db, 'payments'),
        where('storeId', '==', authUser.uid),
      );

      const querySnapshot = await getDocs(paymentQuery);
      querySnapshot.forEach((doc) => {
        setPaymentsData((prev) => ({ ...prev, [doc.id]: doc.data() }));
      });
    };
    if (authUser) getData();
  }, [authUser]);

  return (
    <div className={styles.Payments}>
      <section className={styles.payHead}>
        <div className={styles.title}>
          <Title level={1}>Payments</Title>
          <p>
            Sit back and Relax!
            <br /> We're here to manage all your transactions!
          </p>
        </div>
        <div className={styles.illus}>
          <img src="/images/Payments.svg" alt="Illustration" />
        </div>
      </section>
      <Divider className={styles.headDivider} />
      <section className={styles.main}>
        {Object.keys(paymentsData).map((key) => {
          const data = paymentsData[key];
          return <PaymentCard key={key} data={data} />;
        })}
      </section>
    </div>
  );
}
