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

    /*차트 데이터 가져오기*/
    const getChartVal = async (sel) => {
        await axios
            .get("http://localhost:3000/nwbreak", { params: { sel: sel } })
            .then((resp) => {
                console.log(resp);
                setChartVal(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    /* 차트 기간 선택 */
    const onSelClick = (e) => {
        setSelVal(e.target.id);
    };

    console.log(chartVal);
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
                        data={chartVal}
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
                        <Bar dataKey="pv" fill="#BC8F8F	" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;
