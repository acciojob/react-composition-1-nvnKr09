
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const tabsData = ["Tab 1", "Tab 2", "Tab 3"];
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <div>
        <ul>
          {
          tabsData.map((tab)=>(
              <li onClick={()=>setActiveTab(tab)}>
                {tab}
              </li>
            ))
          }
        </ul>
        <div>
           <p>This is content for {activeTab}</p>
        </div>
    </div>
  )
}

export default App
