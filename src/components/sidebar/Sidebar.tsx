import Listview from "./Listview";
import Pannel from "./Pannel"
import "./sidebar.scss";


const Sidebar  = (props:any) => {
    return(
        <div className={"sidebar"}>
            <Pannel></Pannel>
            <Listview></Listview>
        </div>
    )
}

export default Sidebar ;