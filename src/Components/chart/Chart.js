import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import axios from "axios";

const Chart = () => {
    const [selVal, setSelVal] = useState();
    const [chartVal, setChartVal] = useState([]);

    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    /*차트 데이터 가져오기*/
    const getChartVal = async (sel) => {
        await axios
            .get("http://localhost:3000/", { params: { sel: sel } })
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    /* 차트 기간 선택 */
    const onSelClick = (e) => {
        setSelVal(e.target.id);
    };

    console.log(data);
    return (
        <div>
            <div>
                {" "}
                <div className="mb-3 d-flex justify-content-end">
                    <button
                        className="btn btn-outline-secondary"
                        id="year"
                        onClick={onSelClick}
                    >
                        연간
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        id="quarter"
                        onClick={onSelClick}
                    >
                        분기
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        id="month"
                        onClick={onSelClick}
                    >
                        월간
                    </button>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <BarChart
                        width={1000}
                        height={350}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;
