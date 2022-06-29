import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../utils/data/chart.data";

const chartProp = {
  IMPRESSION_COUNT: {
    dataKey: "impressionCount",
    stroke: "#002aff",
  },
  LIKE_COUNT: { dataKey: "likeCount", stroke: "#82ca9d" },
  RETWEET_COUNT: { dataKey: "retweetCount", stroke: "#ffaa00" },
  PROFILE_CLICK_COUNT: { dataKey: "userProfileClicks", stroke: "#8884d8" },
};

const OverviewChart = (props) => {
  const { chartLineType } = props;
  const state = useSelector((s) => s);
  const { twitter } = state;
  const { timelineCharData } = twitter;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={timelineCharData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartLineType.map((item, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={chartProp[item.type].dataKey}
            stroke={chartProp[item.type].stroke}
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
