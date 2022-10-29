import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    LabelList,
} from "recharts";

const data = [
    {
        name: "국내 전용회선",
        "운용률(%)": 95,
    },
    {
        name: "국제 전용회선",
        "운용률(%)": 90,
    },
];

const renderCustomizedLabel1 = (props) => {
    const { x, y, width, value } = props;
    const radius = -160;

    return (
        <g>
            <text
                x={x + width / 2}
                y={y - radius}
                fill="#FBEFEF"
                textAnchor="middle"
                alignment-baseline="middle"
                dominantBaseline="Hanging"
                font-size="20"
                fontWeight="bold"
            >
                {value.split(" ")[0]}
            </text>
            <text
                x={x + width / 2}
                y={y - (radius - 20)}
                fill="#FBEFEF"
                textAnchor="middle"
                alignment-baseline="middle"
                dominantBaseline="Hanging"
                fontWeight="bold"
            >
                {value.split(" ")[1]}
            </text>
        </g>
    );
};

const SideChart = () => {
    return (
        <div>
            <BarChart
                width={280}
                height={440}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 0,
                }}
                barCategoryGap={23}
            >
                <XAxis dataKey="name" hide />
                <YAxis width={30} />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="운용률(%)"
                    fill="#0B6138"
                    background={{ fill: "#A4A4A4" }}
                >
                    <LabelList
                        dataKey="name"
                        position="insideBottom"
                        content={renderCustomizedLabel1}
                    />
                </Bar>
            </BarChart>
        </div>
    );
};

export default SideChart;
