import styles from "../../../styles/component/ProductCard.module.scss";
import { Divider } from "antd";
import DeleteItem from "./deleteItem";
import EditItem from "./editItem";

const ProductCard = ({ itemName, price, stock, image, index }) => {
  console.log(index);
  return (
    <div className={styles.ProductCard}>
      <div className={styles.productImage}>
        <img src={image}></img>
      </div>
      <div className={styles.productBody}>
        <Divider />
        <div className={styles.productName}>
          <h3 className={styles.productName}>{itemName}</h3>
        </div>
        <div className={styles.details}>
          <p className={styles.productPrice}>
            <span>MRP:&ensp;</span>
            &#8377; {price}
          </p>
          <p className={styles.productStock}>
            <span>Stock: </span>
            {stock}
          </p>
        </div>
        <div className={styles.editButton}>
          <div className={styles.edit} style={{ boxShadow: "none" }}>
            <EditItem data={{ itemName, price, stock }} />
          </div>
          <div className={styles.delete} style={{ boxShadow: "none" }}>
            <DeleteItem data={{ index }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
