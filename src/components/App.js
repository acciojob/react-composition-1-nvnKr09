import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const tabData = [
    {
      title: "Tab 1",
      content: "This is the content for Tab 1.",
    },
    {
      title: "Tab 2",
      content: "This is the content for Tab 2.",
    },
    {
      title: "Tab 3",
      content: "This is the content for Tab 3.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <div>
      <ul>
        {tabData.map((tab) => (
          <li onClick={() => setActiveTab(tab)}>{tab.title}</li>
        ))}
      </ul>
      <div>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
};

export default App;
