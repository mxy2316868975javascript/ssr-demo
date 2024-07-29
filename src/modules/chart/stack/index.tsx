"use client";

import type { NextPage } from "next";
import React from "react";
import { Button, Col, Layout, Menu, Row, theme } from "antd";
import UIStore from "@/store/UIStore";
import { observer } from "mobx-react";
import ReactECharts from "echarts-for-react";

const RowCell = ({ children }: { children?: React.ReactNode }) => {
  return <Col span={8}>{children}</Col>;
};

const series = [
  {
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    stack: "a",
    name: "a",
  },
  {
    data: [10, 46, 64, "-", 0, "-", 0],
    type: "bar",
    stack: "a",
    name: "b",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "a",
    name: "c",
  },
  {
    data: [30, "-", 0, 20, 10, "-", 0],
    type: "bar",
    stack: "b",
    name: "d",
  },
  {
    data: [10, 20, 150, 0, "-", 50, 10],
    type: "bar",
    stack: "b",
    name: "e",
  },
];

const stackInfo = {};
// for (let i = 0; i < series[0].data.length; ++i) {
//   for (let j = 0; j < series.length; ++j) {
//     const stackName = series[j].stack;
//     if (!stackName) {
//       continue;
//     }
//     if (!stackInfo[stackName]) {
//       stackInfo[stackName] = {
//         stackStart: [],
//         stackEnd: [],
//       };
//     }
//     const info = stackInfo[stackName];
//     const data = series[j].data[i];
//     if (data && data !== "-") {
//       if (info.stackStart[i] == null) {
//         info.stackStart[i] = j;
//       }
//       info.stackEnd[i] = j;
//     }
//   }
// }
// for (let i = 0; i < series.length; ++i) {
//   const data = series[i].data;
//   const info = stackInfo[series[i].stack];
//   for (let j = 0; j < series[i].data.length; ++j) {
//     // const isStart = info.stackStart[j] === i;
//     const isEnd = info.stackEnd[j] === i;
//     const topBorder = isEnd ? 20 : 0;
//     const bottomBorder = 0;
//     data[j] = {
//       value: data[j],
//       itemStyle: {
//         borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
//       },
//     };
//   }
// }

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: series,
};

const StackChart: React.FC = () => {
  const uiStore = UIStore;
  return (
    <>
      {[31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((item) => {
        return (
          <RowCell key={item}>
            <ReactECharts
              option={option}
              style={{ height: 400, border: "1px solid #fff" }}
            />
          </RowCell>
        );
      })}
    </>
  );
};

export default observer(StackChart);
