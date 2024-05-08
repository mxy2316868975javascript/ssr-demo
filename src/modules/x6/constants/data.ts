export const image = {
  logo: "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ",
  success:
    "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ",
  failed:
    "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ",
  running:
    "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ",
};

export const graphConfig = {
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
};

export const nodeStatusList = [
  [
    {
      id: "1",
      status: "running",
    },
    {
      id: "2",
      status: "default",
    },
    {
      id: "3",
      status: "default",
    },
    {
      id: "4",
      status: "default",
    },
  ],
  [
    {
      id: "1",
      status: "success",
    },
    {
      id: "2",
      status: "running",
    },
    {
      id: "3",
      status: "default",
    },
    {
      id: "4",
      status: "default",
    },
  ],
  [
    {
      id: "1",
      status: "success",
    },
    {
      id: "2",
      status: "success",
    },
    {
      id: "3",
      status: "running",
    },
    {
      id: "4",
      status: "running",
    },
  ],
  [
    {
      id: "1",
      status: "success",
    },
    {
      id: "2",
      status: "success",
    },
    {
      id: "3",
      status: "success",
    },
    {
      id: "4",
      status: "failed",
    },
  ],
];
