import { Button, Typography } from 'antd';
import styles from '../../../styles/component/Payments.module.scss';

export default function PaymentCard({ details }) {
  const { username, items, purchasedOn, cost, paymentType } = details;

  return (
    <div className={styles.PaymentCard}>
      <p className={styles.time}>
        {purchasedOn.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'IST',
        })}
      </p>
      <Typography.Title level={3}>{username}</Typography.Title>
      <div className={styles.details}>
        <Typography.Title level={5}>
          Number of Items: <span>{items.length}</span>
        </Typography.Title>
        <Typography.Title level={5}>
          Means of Payment: <span>{paymentType}</span>
        </Typography.Title>
      </div>
      <div className={styles.cardEnd}>
        <Button type="primary" className="normalBtn">
          View Items
        </Button>
        <Typography.Title level={3}>
          MRP: <span>{cost}/-</span>
        </Typography.Title>
      </div>
    </div>
  );
}
