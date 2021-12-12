import React, { useContext } from "react";
import Title from "./Title";
import bg_anim1 from '../../media/Animation/bg_animation.svg';

import { HomeBtn } from "../Context";
import { useEffect } from "react";

const Dashboard = () => {
    const [home, setHome] = useContext(HomeBtn);
    
    useEffect(() => {
        if(home === true) {
            document.querySelector('.dashboard').classList.remove('dashboardTranslateLeft');
        }
        if(home === false) {
            document.querySelector('.dashboard').classList.add('dashboardTranslateLeft');
        }
    } ,[home])
    return (
        <div className="dashboard" style={{ height: '94%' }}>
            <div className="w-100 h-100" >
                {/* {bg1} */}
                <img className="h-100 w-100" src={bg_anim1} alt="bg animate" />
            </div>

            <Title />
        </div>
    )
}

export default Dashboard;