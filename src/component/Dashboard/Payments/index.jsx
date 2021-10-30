import styles from '../../../styles/component/Payments.module.scss';
import { Typography, Divider } from 'antd';
import PaymentCard from './PaymentCard';

const { Title } = Typography;

export default function Payments() {
  const dummy = [
    {
      id: 0,
      data: {
        username: 'Ankit Goel',
        items: [
          { id: 0, itemname: 'Turture', quantity: 4, cost: 20 },
          { id: 1, itemname: 'Momos', quantity: 4, cost: 20 },
          { id: 2, itemname: 'Lays', quantity: 4, cost: 20 },
          { id: 3, itemname: 'Shampoo', quantity: 4, cost: 20 },
          { id: 5, itemname: 'Water Bottle', quantity: 4, cost: 20 },
        ],
        cost: 2504,
        purchasedOn: new Date(),
        paymentType: 'PayTM',
      },
    },
  ];

  return (
    <div className={styles.Payments}>
      <section className={styles.payHead}>
        <div className={styles.title}>
          <Title level={2}>Payments</Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fugiat
            a natus voluptatum esse pariatur omnis nisi sapiente voluptate
            tempora.
          </p>
        </div>
        <div className={styles.illus}>
          <img src="/images/Payments.svg" alt="Illustration" />
        </div>
      </section>
      <Divider className={styles.headDivider} />
      <section className={styles.main}>
        {dummy.map((card) => (
          <PaymentCard key={card.id} details={card.data} />
        ))}
      </section>
    </div>
  );
}
