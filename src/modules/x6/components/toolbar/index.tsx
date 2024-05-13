import fs from "fs";
import UIStore from "@/store/UIStore";
import {
  AlignCenterOutlined,
  BoldOutlined,
  DeleteOutlined,
  ItalicOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  RedoOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Menu, Toolbar as AntToolbar } from "@antv/x6-react-components";
import "@antv/x6-react-components/es/menu/style/index.css";
import "@antv/x6-react-components/es/toolbar/style/index.css";
import { message } from "antd";
import { observer } from "mobx-react";

const Item = AntToolbar.Item;
const Group = AntToolbar.Group;

// 设置缩放的最小值和最大值
const minScale = 0.5;
const maxScale = 2.0;

const Toolbar = () => {
  const uiStore = UIStore;
  const onClick = (name: string) => {
    if (typeof name === "number") {
      uiStore.graph.zoom(name, { absolute: true });
    }
    if (name === "undo") {
      uiStore.graph.undo();
    }

    if (name === "redo") {
      uiStore.graph.redo();
    }

    if (name === "zoomIn") {
      const currentScale = uiStore.graph.zoom();
      if (currentScale < maxScale) {
        const newScale = Math.min(maxScale, currentScale + 0.1);
        uiStore.graph.zoom(newScale, { absolute: true });
      }
    }

    if (name === "zoomOut") {
      const currentScale = uiStore.graph.zoom();
      if (currentScale > minScale) {
        const newScale = Math.max(minScale, currentScale - 0.1);
        uiStore.graph.zoom(newScale, { absolute: true });
      }
    }

    if (name === "bold") {
      uiStore.graph.centerContent();
    }

    if (name === "op") {
      uiStore.isGraphWorking = !uiStore.isGraphWorking;
    }

    message.success(`${name} clicked`, 10);

    console.log("uiStore.graph", uiStore.graph);
  };

  const onItemClick = () => {
    console.log("", JSON.stringify(uiStore.graph.toJSON(), null, 2));
  };

  const renderZoomDropdown = () => {
    const MenuItem = Menu.Item; // eslint-disable-line
    const Divider = Menu.Divider; // eslint-disable-line

    return (
      <Menu>
        <MenuItem name="resetView" hotkey="Cmd+H">
          Reset View
        </MenuItem>
        <MenuItem name="fitWindow" hotkey="Cmd+Shift+H">
          Fit Window
        </MenuItem>
        <Divider />
        <MenuItem name="25">25%</MenuItem>
        <MenuItem name="50">50%</MenuItem>
        <MenuItem name="75">75%</MenuItem>
        <MenuItem name="100">100%</MenuItem>
        <MenuItem name="125">125%</MenuItem>
        <MenuItem name="150">150%</MenuItem>
        <MenuItem name="200">200%</MenuItem>
        <MenuItem name="300">300%</MenuItem>
        <MenuItem name="400">400%</MenuItem>
      </Menu>
    );
  };
  console.log("uiStore.isGraphWorking", uiStore.isGraphWorking);

  return (
    <div style={{ background: "#f5f5f5", paddingRight: 16 }}>
      <AntToolbar
        hoverEffect={true}
        size="big"
        onClick={onClick}
        extra={<PlusOutlined onClick={onItemClick} />}
      >
        <Group>
          <Item
            name="zoom"
            tooltipAsTitle={true}
            tooltip="Zoom (Alt+Mousewheel)"
            dropdown={renderZoomDropdown()}
          >
            <span
              style={{
                display: "inline-block",
                width: 40,
                textAlign: "right",
              }}
            >
              100%
            </span>
          </Item>
        </Group>
        <Group>
          <Item name="zoomIn" tooltip="放大" icon={<ZoomInOutlined />} />
          <Item name="zoomOut" tooltip="缩小" icon={<ZoomOutOutlined />} />
        </Group>
        <Group>
          <Item name="undo" tooltip="撤回" icon={<UndoOutlined />} />
          <Item name="redo" tooltip="重做" icon={<RedoOutlined />} />
        </Group>
        <Group>
          <Item
            name="op"
            icon={
              uiStore.isGraphWorking ? (
                <PlayCircleOutlined />
              ) : (
                <PauseCircleOutlined />
              )
            }
            tooltip={uiStore.isGraphWorking ? "开始" : "停止"}
          />
        </Group>
        <Group>
          <Item name="bold" icon={<AlignCenterOutlined />} tooltip="居中" />
        </Group>
      </AntToolbar>
    </div>
  );
};
export default observer(Toolbar);
