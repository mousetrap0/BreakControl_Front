import React from "react";
import HomeChart from "../chart/HomeChart";
import SideChart from "../chart/SideChart";
function Home() {
    return (
        <div className="row border border-dark border-2">
            <div className="col-9 ">
                <HomeChart />
            </div>
            <div className="col-3 ">
                <SideChart />
            </div>
        </div>
    );
}

export default Home;
