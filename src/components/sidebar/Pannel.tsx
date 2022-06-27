import "./sidebar.scss";

import profilePicture from "../../images/prem.png";

const Pannel = () => {
    return(
        <div className={"pannel"}>
            <div className="profile">
                <img src={profilePicture} alt="PK" />
                <div className = "name-container">
                    <p className="name">Premkumar A</p>
                    <p className="total_value">$ 85784.89</p>
                </div>
            </div>
            <input type="text" name="filter-list" id="filter-list" onInput={(e)=>console.log(e)} value={"Freedom"}/>
            <div className="tab_box">
                <button className="tab_button active">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M13,19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H20A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H13V19M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H4A1,1 0 0,1 3,8V4A1,1 0 0,1 4,3M9,7H10V5H9V7M9,15H10V13H9V15M5,5V7H7V5H5M5,13V15H7V13H5Z" /></svg>
                </button>
                <button className="tab_button">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" /></svg>
                </button>
                <button className="tab_button">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z" /></svg>
                </button>
                <button className="tab_button">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4M21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3M8 5H13V11H8V5M21 15H8V13H21V15M21 11H15V9H21V11M21 7H15V5H21V7Z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default Pannel;