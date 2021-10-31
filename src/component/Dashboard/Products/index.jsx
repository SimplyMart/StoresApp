import styles from "../../../styles/component/Product.module.scss";
import ProductCard from "./ProductCard";
import { Typography } from "antd";
import { useAuth } from "../../../utils/context/AuthUserContext";

const { Title } = Typography;

const Products = ({ selectedNav, setSelectedNav }) => {
  const {
    storeData: { products },
  } = useAuth();

  const handleAddItem = () => {
    setSelectedNav(4);
  };

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
              <Title level={1}>Products</Title>
              <p>
                Browse through your shop. We provide you the facility to add new
                item, delete an exisiting item and edit the product details
              </p>
              <div>
                <button onClick={handleAddItem}>Add an item</button>
              </div>
            </div>
            <div className={styles.productSvg}>
              <img src="/images/product.png" className={styles.productLogo} />
            </div>
          </div>
        </div>
        <div className={styles.prodMain}>
          <div className={styles.cardContainer}>
            {products?.map((item, index) => (
              <ProductCard key={index} index={index % 3} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
