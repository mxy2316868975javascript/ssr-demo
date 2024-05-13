import { Graph } from "@antv/x6";
import { computed, observable } from "mobx";

class UIStore {
  @observable graphActiveKey: string | null = null;

  /** 工作流运行状态 */
  @observable isGraphWorking = false;

  /** graph - 实例 */
  @observable graph = {} as Graph;

  /** graph - 数据 */
  @computed get getGraphData() {
    // 获取所有节点
    const nodes = this.graph.getNodes();
    const nodeData = nodes.map((node) => node.toJSON());

    // 获取所有边
    const edges = this.graph.getEdges();
    const edgeData = edges.map((edge) => edge.toJSON());
    return {
      nodes: nodeData,
      edges: edgeData,
    };
  }
}

export default new UIStore();
