import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "국내 전용회선",
        pv: 95,
    },
    {
        name: "국제 전용회선",
        pv: 90,
    },
];

const SideChart = () => {
    return (
        <div>
            <h5>전용회선 별 운용률</h5>
            <BarChart
                width={280}
                height={460}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap={30}
            >
                <XAxis dataKey="name" axisLine={false} />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="pv"
                    fill="#243B0B"
                    background={{ fill: "#A4A4A4" }}
                />
            </BarChart>
        </div>
    );
};

export default SideChart;
