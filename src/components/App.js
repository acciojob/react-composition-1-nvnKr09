
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const tabsData = 
  [
    {
      title:"Tab 1",
      content:"This is content for Tab 1"
    },
    {
      title:"Tab 2",
      content:"This is content for Tab 2"
    },
    {
      title:"Tab 3",
      content:"This is content for Tab 3"
    }
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0].content);

  return (
    <div>
        <ul>
          {
          tabsData.map((tab)=>(
              <li onClick={()=>setActiveTab(tab.content)}>
                {tab.title}
              </li>
            ))
          }
        </ul>
        <div>
           <p>{activeTab}</p>
        </div>
    </div>
  )
}

export default App
