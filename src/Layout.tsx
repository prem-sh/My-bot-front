import Sidebar from "./sidebar/Sidebar";
import "./layout.scss"
import Tabview from "./tabview/Tabview";
import Indicatorpannel from "./Indicators";

const Layout = (props:any) => {
    return (<>
        <Indicatorpannel />

        <div className={"layout"}>
            <div className={"sidebar-container"}>
                <Sidebar /> 
            </div>
            <div className={"tab-container"}>
                <Tabview />
            </div>
        </div>
    </>)
}

export default Layout;