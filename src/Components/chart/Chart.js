import React, { useState, useEffect } from "react";
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
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const apiData = [
    { name: "test1", count: 3, time: 4 },
    { name: "test1", count: 3, time: 4 },
    { name: "test1", count: 3, time: 4 },

    { name: "test2", count: 1, time: 4 },
    { name: "test2", count: 1, time: 4 },

    { name: "test3", count: 2, time: 11 },
    { name: "test4", count: 7, time: 3 },
    { name: "test5", count: 5, time: 3 },
];

const Chart = () => {
    const [selVal, setSelVal] = useState();
    const [chartIdx, setChartIdx] = useState(new Set());
    const [chartCunt, setChartCunt] = useState([]);
    const [chartTime, setChartTime] = useState(new Set());

    const [chartVal, setChartVal] = useState({ N: "1", C: "1", T: "1" });

    /*차트 데이터 가져오기*/
    const initdata = async () => {
        /*      await axios
            .get("http://localhost:3000/nwbreak", {
                params: { readerId: auth ? auth : "" },
            })
            .then((resp) => {
                console.log(resp, "success");
            })
            .catch((err) => {
                console.log(err, "fail");
            }); */

        apiData.map((d, idx, arr) => {
            chartIdx.add(d.name);
            setChartIdx(chartIdx);
        });
        let res = 0;

        chartIdx.forEach((v) => {
            const aaa = apiData.filter((a) => {
                if (v === a.name) res = res + a.count;
                return setChartTime({ na: v, co: res });
            });
            res = 0;
        });
    };

    useEffect(() => {
        initdata();
    }, []);

    /* 차트 기간 선택 */
    const onSelClick = (e) => {
        setSelVal(e.target.id);
    };

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
                        data={apiData}
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
                        <Bar dataKey="count" fill="#BC8F8F	" />
                        <Bar dataKey="time" fill="#B8860B	" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;
