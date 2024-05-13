"use client";

import type { NextPage } from "next";
import React from "react";
import { Button, Col, Layout, Menu, Row, theme } from "antd";
import UIStore from "@/store/UIStore";
import { observer } from "mobx-react";
import ReactECharts from "echarts-for-react";
import { option } from "./constants";
import StackChart from "./stack";

const RowCell = ({ children }: { children?: React.ReactNode }) => {
  return <Col span={8}>{children}</Col>;
};

const About: React.FC = () => {
  const uiStore = UIStore;
  console.log("uiStore", uiStore);
  return (
    <Layout className="h-full overflow-y-auto">
      <Row gutter={[0, 16]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
          return (
            <RowCell key={item}>
              <ReactECharts
                option={option}
                style={{ height: 400, border: "1px solid #fff" }}
              />
            </RowCell>
          );
        })}
        <StackChart />
      </Row>
    </Layout>
  );
};

export default observer(About);
