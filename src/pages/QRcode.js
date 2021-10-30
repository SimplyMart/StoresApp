import { useEffect, useState } from "react";
import styles from "../styles/QRcode.module.scss";

export default function QRcode() {
  const [temp, setTemp] = useState(" ");
  const [word, setWord] = useState({});
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);
  console.log(qrCode);

  const handleClick = (e) => {
    setWord(temp);
  };
  return (
    <div className={styles.QRcode}>
      <h1 className={styles.codeHeading}>QR Code Generator</h1>
      <div className={styles.inputBox}>
        <div className={styles.gen}>
          <input
            type="text"
            name="ShopLink"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            placeholder="Enter shop Link"
          />
          <button className={styles.buttons} onClick={handleClick}>
            Generate
          </button>
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
            max="300"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.outputBox}>
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
