import { useState, useEffect } from 'react';
import styles from '../../styles/component/Profile.module.scss';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography, Input, Button, Upload, message } from 'antd';
import { updateDoc, doc, getDoc } from '@firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../utils/firebase';
import { useAuth } from '../../utils/context/AuthUserContext';

const { Title } = Typography;

export default function Profile() {
  const {
    authUser,
    storeData: { address, ownerName, storeName, phoneNumber, profileUrl },
  } = useAuth();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    storeName,
    ownerName,
    phoneNumber,
    address,
  });
  const [uploadState, setUploadState] = useState({
    loading: false,
    file: null,
  });

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleUploadChange = (info) => {
    if (info.file.status === 'uploading') {
      setUploadState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
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
    setFormFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const { address, ownerName, storeName, phoneNumber } = formFields;
    let profileUrl = null;

    if (uploadState.file) {
      const snapshot = await uploadBytes(
        ref(storage, `/stores/profiles/${authUser.uid}`),
        uploadState.file,
      );
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(downloadURL);
      profileUrl = downloadURL;
    }

    await updateDoc(doc(db, 'store', authUser.uid), {
      address,
      ownerName,
      storeName,
      phoneNumber,
      profileUrl,
    });
    setSubmitLoading(false);
    message.success('Profile updated!');
  };

  useEffect(() => {
    if (profileUrl) setUploadState({ file: { preview: profileUrl } });
  }, [profileUrl]);

  return (
    <div className={styles.Profile}>
      <div className={styles.illus}>
        <img src="/images/profile.svg" alt="Illustration" />
      </div>
      <Title level={1}>Profile</Title>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleUploadChange}
        >
          {uploadState.file ? (
            <img
              src={uploadState.file.preview}
              alt="avatar"
              style={{ width: '100%' }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
        <div className={styles.inputField}>
          <label htmlFor="storeName">Store Name</label>
          <Input
            id="storeName"
            name="storeName"
            value={formFields.storeName}
            onChange={handleFormFields}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="ownerName">Owner Name</label>
          <Input
            id="ownerName"
            name="ownerName"
            value={formFields.ownerName}
            onChange={handleFormFields}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="phoneNumber">Contact Number</label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            value={formFields.phoneNumber}
            onChange={handleFormFields}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="address">Address</label>
          <Input.TextArea
            id="address"
            name="address"
            value={formFields.address}
            onChange={handleFormFields}
            required
            showCount
            maxLength="100"
            allowClear
          />
        </div>
        <Button
          loading={submitLoading}
          type="primary"
          htmlType="submit"
          className="normalBtn"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
