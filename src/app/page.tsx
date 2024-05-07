"use client";

import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { AppstoreOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const navigationData = [
  { path: "/", label: "Home", icon: <AppstoreOutlined /> },
  {
    path: "/about",
    label: "About",
    icon: <AppstoreOutlined />,
  },
  {
    path: "/chart",
    label: "chart",
    icon: <AppstoreOutlined />,
  },
  { path: "/x6", label: "x6", icon: <AppstoreOutlined /> },
  { path: "/my", label: "my", icon: <AppstoreOutlined /> },
  {
    path: "/contact",
    label: "Contact",
    icon: <AppstoreOutlined />,
  },
];

const DynamicNavigation = () => {
  return (
    <Menu theme="dark" mode="inline">
      {navigationData.map((item, index) => (
        <Menu.Item key={index} icon={item.icon}>
          <Link href={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />

        <DynamicNavigation />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <AppstoreOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: 10,
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
