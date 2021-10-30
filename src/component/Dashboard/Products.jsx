import styles from '../../styles/component/Product.module.scss';
import { useState } from 'react';
import ProductCard from '../ProductCard';
import { doc, getDoc } from 'firebase/firestore';
import { Typography } from 'antd';

const Items = [
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },

  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips fndjvdbjdsjvfdz fefersfefe',
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: 'Chips',
    price: 20,
    stock: 20,
  },
];

const { Title } = Typography;

const Products = () => {
  const [items, setItems] = useState(Items);

  return (
    <div
      className="site-card-wrapper"
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <div className={styles.Products}>
        <div className={styles.productHeader}>
          <div className={styles.row}>
            <div className={styles.heading}>
              <Title level={1}>Products</Title>
              <p>
                Browse through your shop. We provide you the facility to add new
                item, delete an exisiting item and edit the product details
              </p>
            </div>
            <div className={styles.productSvg}>
              <img src="/images/product.png" className={styles.productLogo} />
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          {items.map((item, index) => (
            <ProductCard key={index} index={index % 3} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
