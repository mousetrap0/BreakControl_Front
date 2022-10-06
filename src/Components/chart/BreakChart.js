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

const BreakChart = () => {
    const { auth, setAuth } = useContext(AuthContext);

    //차트 기간설정
    const [termVal, setTermVal] = useState("year");

    const [chartVal, setChartVal] = useState();

    /*차트 데이터 가져오기*/
    const initdata = async (term) => {
        await axios
            .get("http://localhost:3000/nwbreak/chart", {
                params: { type: term },
            })
            .then((resp) => {
                console.log(resp, "success");
                const temp = resp.data.chartList.map((d) => {
                    return {
                        회선이름: d.lineId,
                        "장애지속시간(분)": d.failTimeTotal,
                        "장애횟수(건)": d.breakCount,
                    };
                });
                setChartVal(temp);
                console.log(temp);
            })
            .catch((err) => {
                console.log(err, "fail");
            });
    };

    useEffect(() => {
        initdata(termVal);
    }, [termVal]);

    /* 차트 기간 선택 */
    const onSelClick = (e) => {
        setTermVal(e.target.id);
    };

    return (
        <div>
            <div className="mb-3 d-flex justify-content-center">
                <div style={{ backgroundColor: "#F6F6F6", padding: "20px" }}>
                    <div className="mb-3 mr-5 d-flex justify-content-end">
                        <button
                            className="btn btn-outline-secondary"
                            id="year"
                            onClick={onSelClick}
                            style={{ fontSize: "20", fontWeight: "bold" }}
                        >
                            연간
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="quarter"
                            onClick={onSelClick}
                            style={{ fontSize: "20", fontWeight: "bold" }}
                        >
                            분기
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            id="month"
                            onClick={onSelClick}
                            style={{ fontSize: "20", fontWeight: "bold" }}
                        >
                            월간
                        </button>
                    </div>
                    <BarChart
                        width={1000}
                        height={350}
                        data={chartVal}
                        margin={{
                            top: 50,
                            right: 50,
                            left: 50,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="회선이름"
                            padding={{ left: 20, right: 20 }}
                            style={{ fontSize: "20", fontWeight: "bold" }}
                        />
                        <YAxis
                            yAxisId="left"
                            label={{
                                value: "분",
                                offset: 30,
                                angle: 0,
                                position: "top",
                                fontWeight: "",
                                fontSize: "20",
                            }}
                            type="number"
                            domain={[0, (dataMax) => dataMax]}
                            style={{ fontSize: "20", fontWeight: "" }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            label={{
                                value: "건",
                                offset: 30,
                                angle: 0,
                                position: "top",
                                fontWeight: "",
                                fontSize: "20",
                            }}
                            style={{ fontSize: "20", fontWeight: "" }}
                        />
                        <Tooltip />
                        <Legend />
                        <Bar
                            yAxisId="left"
                            dataKey="장애지속시간(분)"
                            barSize={termVal === "year" ? 50 : 100}
                            fill="#4E6697"
                        />
                        <Bar
                            yAxisId="right"
                            dataKey="장애횟수(건)"
                            barSize={termVal === "year" ? 50 : 100}
                            fill="#2A8755"
                        />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default BreakChart;
