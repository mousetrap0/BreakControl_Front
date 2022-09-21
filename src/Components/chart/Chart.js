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

const Data = [
    { name: "test1", count: 3, time: 4 },
    { name: "test2", count: 1, time: 4 },
    { name: "test3", count: 2, time: 11 },
    { name: "test4", count: 7, time: 3 },
    { name: "test5", count: 5, time: 3 },
    { name: "test6", count: 10, time: 2 },
    { name: "test7", count: 2, time: 1 },
    { name: "test8", count: 2, time: 4 },
];

const Chart = () => {
    const [selVal, setSelVal] = useState();
    const [chartVal, setChartVal] = useState([]);

    const { auth, setAuth } = useContext(AuthContext);

    /*차트 데이터 가져오기*/
    const initdata = async () => {
        await axios
            .get("http://localhost:3000/nwbreak", {
                params: { readerId: auth ? auth : "" },
            })
            .then((resp) => {
                console.log(resp, "success");
            })
            .catch((err) => {
                console.log(err, "fail");
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
                        data={Data}
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
