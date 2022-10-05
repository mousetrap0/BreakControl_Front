import React from "react";
import BreakChart from "../chart/BreakChart";
import HomeChart from "../chart/HomeChart";
function Home() {
    return (
        <div>
            <div>
                <HomeChart />
            </div>
            <div>
                <BreakChart />
            </div>
        </div>
    );
}

export default Home;
