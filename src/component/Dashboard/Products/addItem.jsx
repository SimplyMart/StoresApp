import styles from "../../../styles/component/addItem.module.scss";
import {
  Typography,
  Upload,
  Divider,
  Form,
  Input,
  Button,
  message,
} from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useAuth } from "../../../utils/context/AuthUserContext";
import { updateDoc, doc, arrayUnion } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../utils/firebase";

const { Title } = Typography;

export default function AddProductItem() {
  const {
    authUser,
    updateStoreData,
    storeData: { products },
  } = useAuth();
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [itemInfo, setItemInfo] = useState({
    prodId: "",
    itemName: "",
    price: "",
    stock: "",
  });
  const [uploadState, setUploadState] = useState({
    loading: false,
    file: null,
  });

  const onReset = () => {
    form.resetFields();
    setUploadState({ file: null });
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleUploadChange = (info) => {
    if (info.file.status === "uploading") {
      setUploadState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      const file = info.file.originFileObj;
      Object.assign(file, { preview: window.URL.createObjectURL(file) });
      setUploadState({
        file,
        loading: false,
      });
    }
  };

  const uploadButton = (
    <div>
      {uploadState.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleFormFields = (e) => {
    setItemInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    setSubmitLoading(true);
    const { name, price, stock, prodId } = e;
    let image = null;

    if (uploadState.file) {
      const snapshot = await uploadBytes(
        ref(storage, `/stores/products/${prodId}`),
        uploadState.file
      );
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(downloadURL);
      image = downloadURL;
    } 
    // else {
    //   message.error("Please add a product image!");
    //   setSubmitLoading(false);
    //   return;
    // }

    await updateDoc(doc(db, "store", authUser.uid), {
      products: arrayUnion({
        prodId, 
        itemName: name,
        price,
        stock,
        image,
      }),
    });
    products.push({
      prodId,
      itemName: name,
      price,
      stock,
      image,
    });
    updateStoreData({ products });
    setSubmitLoading(false);
    message.success("Item added successfully!");
    onReset();
  };

  return (
    <div className={styles.additem}>
      <div className={styles.newItemIllus}>
        <img src='/images/addNewItem.png'></img>
      </div>
      <Title level={1}>
        ADD A NEW ITEM
        <Divider />
      </Title>
      <div className={styles.addItemForm}>
        <Form form={form} layout='vertical' onFinish={handleFormSubmit}>
          <Upload
            name='avatar'
            listType='picture-card'
            style={{ marginBottom: 150 }}
            className='imageUpload'
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleUploadChange}
          >
            {uploadState.file ? (
              <img
                src={uploadState.file.preview}
                alt='avatar'
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          <Form.Item
            className={styles.formInput}
            label='Product Id'
            name='prodId'
            value={itemInfo.prodId}
            onChange={handleFormFields}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Enter Product Id' type='number' />
          </Form.Item>
          <Form.Item
            className={styles.formInput}
            label='Product Name'
            name='name'
            value={itemInfo.itemName}
            onChange={handleFormFields}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Enter Product Name' />
          </Form.Item>
          <Form.Item
            className={styles.formInput}
            label='Price'
            name='price'
            value={itemInfo.price}
            onChange={handleFormFields}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type='Number' placeholder='Enter price per piece' />
          </Form.Item>
          <Form.Item
            className={styles.formInput}
            label='Stock'
            name='stock'
            value={itemInfo.stock}
            onChange={handleFormFields}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type='Number' placeholder='Enter total quantity' />
          </Form.Item>
          <Form.Item>
            <div className={styles.formButtons}>
              <div>
                <Button
                  loading={submitLoading}
                  type='primary'
                  htmlType='submit'
                  className='normalBtn'
                >
                  Submit
                </Button>
              </div>
              <div>
                <Button
                  htmlType='button'
                  onClick={onReset}
                  className='normalBtn'
                >
                  Reset
                </Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
