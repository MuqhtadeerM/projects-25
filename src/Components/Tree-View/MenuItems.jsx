import { useState } from "react";
import MenuLists from "./MenuList";
import "./TreeMenu.css";
export default function MenuItem({ item }) {
  const [displayCurrent, setDisplayCurrent] = useState({});

  const handleToggleChildren = (getLabel) => {
    setDisplayCurrent({
      ...displayCurrent,
      [getLabel]: !displayCurrent[getLabel],
    });
  };
  console.log(displayCurrent);
  if (!item) return null;

  return (
    <li>
      <div className="menu-item" style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrent[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item.children &&
      item.children.length > 0 &&
      displayCurrent[item.label] ? (
        <MenuLists list={item.children} />
      ) : null}
    </li>
  );
}
