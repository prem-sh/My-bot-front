import Listview from "./Listview";
import Pannel from "./Pannel"
import "./sidebar.scss";
import { useState } from "react";


const Sidebar  = (props:any) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedTabData, setSelectedTabData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);


    return(
        <div className={"sidebar"}>
            <Pannel setActiveTab={setActiveTab}></Pannel>
            <Listview activeTab={activeTab} ></Listview>
        </div>
    )
}

export default Sidebar ;