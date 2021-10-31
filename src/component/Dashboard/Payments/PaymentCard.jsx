import { useState } from 'react';
import { Button, Divider, Typography, Table } from 'antd';
import styles from '../../../styles/component/Payments.module.scss';

const { Title } = Typography;

export default function PaymentCard({ data }) {
  const { items, purchasedOn, cost, username, phoneNumber } = data;
  const [view, toggleView] = useState(false);

  const itemColumns = [
    {
      title: 'S. No.',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Item Name',
      dataIndex: 'itemname',
      key: 'itemname',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{text}/-</a>,
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      render: (text) => <a>{text}/-</a>,
    },
  ];

  const viewItems = () => {
    toggleView(!view);
  };

  return (
    <div className={styles.PaymentCard}>
      <p className={styles.time}>
        {new Date(purchasedOn.seconds * 1000).toLocaleString('en-US', {
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
      <Title level={3} className={styles.user}>
        {username}
      </Title>
      <div className={styles.details}>
        <Title level={5}>
          Number of Items: <span>{items.length}</span>
        </Title>
        <Title level={5}>
          Customer Phone Number: <span>{phoneNumber}</span>
        </Title>
      </div>
      <div className={styles.cardEnd}>
        <Button type="primary" className="normalBtn" onClick={viewItems}>
          View Items
        </Button>
        <Title level={3}>
          Total Amount: <span>&#8377; {cost}/-</span>
        </Title>
      </div>
      <div className={styles.itemContainer}>
        <div className={`${styles.innerContainer} ${view && styles.display}`}>
          <Divider className={styles.containerDivider} />
          <Table columns={itemColumns} dataSource={items} />
        </div>
      </div>
    </div>
  );
}
