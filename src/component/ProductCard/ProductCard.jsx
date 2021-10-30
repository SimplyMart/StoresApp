import styles from "../../styles/component/ProductCard.module.scss";
import { Divider } from "antd";

const ProductCard = ({ name, price, stock, id }) => {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.productImage}>
        <img src="https://m.media-amazon.com/images/I/81FiLuVfH9L._SL1500_.jpg"></img>
      </div>
      <div className={styles.productBody}>
        <Divider />
        <div className={styles.productName}>
          <h3 className={styles.productName}>{name}</h3>
        </div>
        <div className={styles.details}>
          <p className={styles.productPrice}>
            <span> MRP:</span>
            Rs.
            {price}
          </p>
          <p className={styles.productStock}>
            <span> Stock: </span>
            {stock}
          </p>
        </div>
        <div className={styles.editButton}>
          {/* <Link to={`/edit/${id}`} key={id} style={{ width: "100%" }}> */}
          <div className={styles.edit} style={{ boxShadow: "none" }}>
            Edit
          </div>
          {/* </Link> */}
          <div className={styles.delete} style={{ boxShadow: "none" }}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
