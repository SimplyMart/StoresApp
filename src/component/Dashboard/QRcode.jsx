import { useEffect, useState } from 'react';
import { Button } from 'antd';
import styles from '../../styles/QRcode.module.scss';

export default function QRcode() {
  const [word, setWord] = useState('temporary-shop-link-123');
  const [size, setSize] = useState(300);
  const [bgColor, setBgColor] = useState('ffffff');
  const [qrCode, setQrCode] = useState('');

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`,
    );
  }, [word, size, bgColor]);

  return (
    <div className={styles.QRcode}>
      <h1 className={styles.codeHeading}>QR Code Generator</h1>
      <div className={styles.main}>
        <div className={styles.outputBox}>
          <img src={qrCode} alt="" />
          <div className={styles.link}>
            <h5>
              Link: <span>{word}</span>
            </h5>
          </div>
        </div>
        <div className={styles.extra}>
          <h5>Background Color:</h5>
          <input
            type="color"
            onChange={(e) => {
              setBgColor(e.target.value.substring(1));
            }}
          />
          <h5>Dimension:</h5>
          <input
            type="range"
            min="100"
            max="500"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <a href={qrCode} download="QRCode" target="_blank">
            <Button type="primary" className="normalBtn">
              Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
