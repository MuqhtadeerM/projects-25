import { useState } from "react";
import "./tabs.css";
export default function Tabs({ tabsContent, onChange }) {
  const [currentTab, setCurrentTab] = useState(0);
  const handleClick = (getCurrentTab) => {
    setCurrentTab(getCurrentTab);
    onChange(getCurrentTab);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${
              currentTab === index ? "active" : "inactive"
            }`}
            onClick={() => handleClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTab] && tabsContent[currentTab].content}
      </div>
    </div>
  );
}
