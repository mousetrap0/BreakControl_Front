import React from "react";
import HomeChart from "../chart/HomeChart";
import SideChart from "../chart/SideChart";
function Home() {
    return (
        <div>
            <div>
                <HomeChart />
            </div>
            <div>
                <SideChart />
            </div>
        </div>
    );
}

export default Home;
