"use client";

import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Button, Layout, Menu, theme } from "antd";
import GraphContainer from "./components/graph";

const About: React.FC = () => {
  return (
    <Layout className="h-full">
      <GraphContainer />
    </Layout>
  );
};

export default About;
