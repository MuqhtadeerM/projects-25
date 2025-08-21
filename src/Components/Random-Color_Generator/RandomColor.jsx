import { useEffect, useState } from "react";

export default function RandomColorGeneratot() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgb = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb ${r}, ${g}, ${b}`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgb();
    else handleCreateRandomHex();
  }, [typeOfColor]);

  return (
    <div>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateRandomHex : handleCreateRandomRgb
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          backgroundColor: "green",
        }}
      >
        <h3>{typeOfColor === "rgb " ? "RGB color" : "Hex Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
