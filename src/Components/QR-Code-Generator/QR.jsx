import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const handleClick = () => {
    setInput("");
    setQrCode(input);
  };
  return (
    <div>
      <h1>QR Generator</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          placeholder="Enther the Value"
        />
        <button
          onClick={handleClick}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
}
