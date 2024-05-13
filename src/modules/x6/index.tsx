"use client";

import type { NextPage } from "next";
import { observer } from "mobx-react";

import React, { useEffect } from "react";
import { Button, Layout, Menu, theme } from "antd";
import UIStore from "@/store/UIStore";
import Toolbar from "./components/toolbar";
import GraphContainer from "./components/graph";
import Tabs from "./components/tabs";

const About: React.FC = () => {
  const { graphActiveKey, isGraphWorking } = UIStore;
  console.log("graphActiveKey", graphActiveKey);
  return (
    <Layout className="h-full">
      {/* 切换 */}
      <Tabs />

      <div className="flex h-full flex-col">
        <div className="h-10">
          {/* 工具栏 */}
          <Toolbar />
        </div>
        <div className="flex-1">
          {/* 工作流 */}
          {graphActiveKey ? <GraphContainer id={graphActiveKey} /> : null}
        </div>
      </div>
    </Layout>
  );
};

export default observer(About);
