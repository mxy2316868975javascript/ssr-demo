import React, { useEffect, useRef } from "react";
import { Graph, Path, Cell, Node, Edge } from "@antv/x6";
// import { Selection } from '@antv/x6-plugin-selection'
import { History } from "@antv/x6-plugin-history";
import { Snapline } from "@antv/x6-plugin-snapline";
import { register } from "@antv/x6-react-shape";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { Selection } from "@antv/x6-plugin-selection";
import { Keyboard } from "@antv/x6-plugin-keyboard";
import "./index.scss";
import { image, nodeStatusList } from "../../constants/data";
import UIStore from "@/store/UIStore";

const AlgoNode = (props: any) => {
  const { node } = props;
  const data = node?.getData();
  const { id, label, status = "default" } = data;
  console.log("data", data);
  return (
    <div className={`node ${status}`}>
      <img src={image.logo} alt="logo" />
      <span className="label">
        {label} - {id}
      </span>
      <span className="status">
        {status === "success" && <img src={image.success} alt="success" />}
        {status === "failed" && <img src={image.failed} alt="failed" />}
        {status === "running" && <img src={image.running} alt="running" />}
      </span>
    </div>
  );
};

register({
  shape: "dag-node",
  width: 180,
  height: 36,
  component: AlgoNode,
  ports: {
    groups: {
      top: {
        position: "top",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#C2C8D5",
            strokeWidth: 1,
            fill: "#fff",
          },
        },
      },
      bottom: {
        position: "bottom",
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: "#C2C8D5",
            strokeWidth: 1,
            fill: "#fff",
          },
        },
      },
    },
  },
});

Graph.registerEdge(
  "dag-edge",
  {
    inherit: "edge",
    attrs: {
      line: {
        stroke: "#C2C8D5",
        strokeWidth: 1,
        targetMarker: null,
      },
    },
  },
  true
);

Graph.registerConnector(
  "algo-connector",
  (s, e) => {
    const offset = 4;
    const deltaY = Math.abs(e.y - s.y);
    const control = Math.floor((deltaY / 3) * 2);

    const v1 = { x: s.x, y: s.y + offset + control };
    const v2 = { x: e.x, y: e.y - offset - control };

    return Path.normalize(
      `M ${s.x} ${s.y}
         L ${s.x} ${s.y + offset}
         C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
         L ${e.x} ${e.y}
        `
    );
  },
  true
);

const GraphContainer = ({ id }: { id: number | string }) => {
  const uiStore = UIStore;
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const graph: Graph = new Graph({
      container: containerRef.current,
      panning: {
        enabled: true,
        eventTypes: ["leftMouseDown", "mouseWheel"],
      },
      background: {
        color: "#F2F7FA",
      },
      grid: {
        visible: true,
        type: "doubleMesh",
        args: [
          {
            color: "#eee", // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: "#ddd", // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
      autoResize: true,
      mousewheel: {
        enabled: true,
        modifiers: "ctrl",
        factor: 1.1,
        maxScale: 1.5,
        minScale: 0.5,
      },
      highlighting: {
        magnetAdsorbed: {
          name: "stroke",
          args: {
            attrs: {
              fill: "#fff",
              stroke: "#31d0c6",
              strokeWidth: 4,
            },
          },
        },
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        connector: "algo-connector",
        connectionPoint: "anchor",
        anchor: "center",
        validateMagnet({ magnet }) {
          return magnet.getAttribute("port-group") !== "top";
        },
        createEdge() {
          return graph.createEdge({
            shape: "dag-edge",
            attrs: {
              line: {
                strokeDasharray: "5 5",
              },
            },
            zIndex: -1,
          });
        },
      },
    });

    uiStore.graph = graph;
    // graph
    //   .use
    //     new Selection({
    //       multiple: true,
    //       rubberEdge: true,
    //       rubberNode: true,
    //       modifiers: "shift",
    //       rubberband: true,
    //     })
    //   ();

    graph.on("edge:connected", ({ edge }: { edge: Edge }) => {
      edge.attr({
        line: {
          strokeDasharray: "",
        },
      });
    });

    graph.on("node:change:data", ({ node }: { node: Node }) => {
      const edges = graph.getIncomingEdges(node) as Edge[];
      const { status } = node.getData();
      edges?.forEach((edge) => {
        if (status === "running") {
          edge.attr("line/strokeDasharray", 5);
          edge.attr("line/style/animation", "running-line 30s infinite linear");
        } else {
          edge.attr("line/strokeDasharray", "");
          edge.attr("line/style/animation", "");
        }
      });
    });

    graph.on("edge:mouseenter", ({ edge }) => {
      edge.addTools({
        name: "button-remove",
        args: { distance: -40 },
      });
    });

    graph.on("edge:mouseleave", ({ edge }) => {
      edge.removeTools();
    });

    graph.bindKey("ctrl+c", () => {
      const cells = graph.getSelectedCells();
      console.log(cells);
      if (cells.length) {
        graph.copy(cells);
      }
      return false;
    });

    graph.bindKey("ctrl+v", () => {
      if (!graph.isClipboardEmpty()) {
        const cells = graph.paste({ offset: 32 });
        graph.cleanSelection();
        graph.select(cells);
      }
      return false;
    });

    graph.use(
      new History({
        enabled: true,
      })
    );

    graph.use(
      new Snapline({
        enabled: true,
        sharp: true,
      })
    );

    graph.use(
      new Clipboard({
        enabled: true,
      })
    );

    graph.use(
      new Selection({
        enabled: true,
        showNodeSelectionBox: true,
      })
    );

    graph.use(
      new Keyboard({
        enabled: true,
        global: true,
      })
    );

    // 初始化节点/边
    const init = (data: Cell.Metadata[]) => {
      const cells: Cell[] = [];
      data.forEach((item) => {
        if (item.shape === "dag-node") {
          cells.push(graph.createNode(item));
        } else {
          cells.push(graph.createEdge(item));
        }
      });
      graph.resetCells(cells);
    };

    // 显示节点状态
    const showNodeStatus = async (
      statusList: {
        id: string;
        status: string;
      }[][]
    ) => {
      const status = statusList.shift();
      status?.forEach((item) => {
        const { id, status } = item;
        const node = graph.getCellById(id);
        const data = node.getData();
        node.setData({
          ...data,
          status,
        });
      });
      setTimeout(() => {
        showNodeStatus(statusList);
      }, 3000);
    };

    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        init(data);
        showNodeStatus(nodeStatusList);
        graph.centerContent();
      });

    return () => {
      // 组件卸载时清理资源
      graph.dispose();
    };
  }, []);
  console.log(`render-${id}`);
  return (
    <div
      key={id}
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default GraphContainer;
