import { Card, Col, Row, Button } from "antd";
import styles from "../../styles/component/Product.module.scss";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Items = [
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },

  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips fndjvdbjdsjvfdz",
    price: 20,
    stock: 20,
  },
  {
    id: 1,
    name: "Chips",
    price: 20,
    stock: 20,
  },
];

const Products = () => {
  const [items, setItems] = useState(Items);
  return (
    <div
      className="site-card-wrapper"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div className={styles.Products}>
        <div className={styles.productHeader}>
          <div className={styles.row}>
            <div className={styles.heading}>
              <h1>Products</h1>
              <p>
                {" "}
                Browse through your shop. We provide you the facility to add new
                item, delete an exisiting item and edit the product details
              </p>
            </div>
            <div className={styles.productSvg}>
              <img src="/images/product.png" className={styles.productLogo} />
            </div>
          </div>
          <div></div>
        </div>
        {/* <div className={styles.cardContainer}>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <p>Name</p>
                <p>MRP:</p>
                <p>Stock:</p>
                <div>
                  <Button type="primary" success>
                    Edit
                  </Button>
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div> */}
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
