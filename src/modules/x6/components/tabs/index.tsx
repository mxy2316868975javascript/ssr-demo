import UIStore from "@/store/UIStore";
import { Button, Tabs as AntTabs } from "antd";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

interface TabItemInterface {
  label: string;
  key: number | string;
  children?: React.ReactNode;
}

const defaultPanes: TabItemInterface[] = [
  {
    label: "1",
    key: "1",
  },
];

const Tabs: React.FC = () => {
  const uiStore = UIStore;
  const [activeKey, setActiveKey] = useState("newTab1");
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  useEffect(() => {
    uiStore.graphActiveKey = "newTab1";
    defaultPanes
      .map((item) => {
        return {
          ...item,
          children: item,
        };
      })
      .forEach(() => {
        add();
      });
  }, []);

  const onChange = (key: string) => {
    uiStore.graphActiveKey = key;
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([
      ...items,
      { label: newActiveKey, children: newActiveKey, key: newActiveKey },
    ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key as string);
    }
    setItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  console.log("items", items);
  return (
    <div>
      <AntTabs
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
      >
        {items.map((tab) => (
          <AntTabs.TabPane
            tab={tab?.label}
            key={tab?.key}
            closable={items.length > 1}
          />
        ))}
      </AntTabs>
    </div>
  );
};

export default observer(Tabs);
