import styles from "../../../styles/component/addItem.module.scss";
import { Typography, Upload, Divider, Form, Input, Button } from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function AddProductItem() {
  const [form] = Form.useForm();
  const [uploadState, setUploadState] = useState({
    loading: false,
    file: null,
    imageUrl: null,
  });
  const onReset = () => {
    form.resetFields();
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

  return (
    <div className={styles.additem}>
      <div className={styles.newItemIllus}>
        <img src="/images/addNewItem.png"></img>
      </div>
      <Title level={1}>
        ADD A NEW ITEM
        <Divider />
      </Title>
      <div className={styles.addItemForm}>
        <Form form={form} layout="vertical">
          <Upload
            name="avatar"
            listType="picture-card"
            style={{ marginBottom: 150 }}
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleUploadChange}
          >
            {uploadState.file ? (
              <img
                src={uploadState.file.preview}
                alt="avatar"
                style={{ width: "100%" }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          <Form.Item
            className={styles.formInput}
            label="Product Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter Product Name" />
          </Form.Item>
          <Form.Item
            className={styles.formInput}
            label="Price"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="Number" placeholder="Enter price per piece" />
          </Form.Item>
          <Form.Item
            className={styles.formInput}
            label="Stock"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="Number" placeholder="Enter total quantity" />
          </Form.Item>
          <Form.Item>
            <div className={styles.formButtons}>
              <div>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
              <div>
                <Button htmlType="button" onClick={onReset}>
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
