import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import moment from "moment";

const today = moment();
const DayToToday = moment(today).format("DDD");

console.log(typeof aa);

const data = [
    { name: "무중단 운영일", value: 300 },
    { name: "장애일수", value: 65 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dx={300}
                dy={-180}
                fontSize="22"
                textAnchor="middle"
                fill="#0C0C0C"
            >
                * 기준일 : {today.format("YYYY / MM / DD")}
            </text>
            {/* 원 중심 텍스트 */}
            <text
                x={cx}
                y={cy}
                dy={-40}
                fontSize="27"
                textAnchor="middle"
                fill="#0C0C0C"
            >
                무중단 운영 달성도
            </text>
            <text
                x={cx}
                y={cy}
                dx={10}
                dy={30}
                fontSize="50"
                textAnchor="middle"
                fill="#0C0C0C"
            >
                {Math.round((300 / 365) * 10000) / 100}%{/* {payload.name} */}
            </text>
            {/* onMouse 시 동작 */}
            {/* 그래프 색 */}
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill="#BD9774"
                /* {fill} */
            />
            {/* 그래프 밖에 선 색 */}
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill="#BD9774"
                /* {fill} */
            />

            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />

            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

            {/* 원 밖 레이블 텍스트 */}
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                fontSize="20"
                textAnchor={textAnchor}
                fill="#333"
            >{`${payload.name} : ${value} 일`}</text>

            {/* 원 밖 레이블 텍스트 백분율*/}
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                fontSize="20"
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const HomeChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <PieChart width={1100} height={800}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={550}
                cy={230}
                innerRadius={150}
                outerRadius={200}
                fill="#766C30"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    );
};

export default HomeChart;
