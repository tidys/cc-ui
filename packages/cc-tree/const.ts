export const ProvideKeys = {
  Emitter: 'emitter',
  NodeClick: 'node-click',
  NodeUnclick: 'node-unclick',
  NodeEnter: 'node-enter',
  NodeMenu: 'node-menu',
  NodeLeave: 'node-leave',
  NodeExpand: 'node-expand',
  NodeCollapse: 'node-collapsed',
  DefaultExpandAll: 'default-expand-all',
  CheckExpand: 'check-expand',
  CurrentSelect: 'current-select',
  ShowIcon: 'show-icon',
  RootElement: 'root-element',
};
export const Msg = {
  SelectReset: 'select-reset',
  UpdateSelect: 'update-select',
  HandExpand: 'hand-expand',
  DoFilter: 'do-filter',
  ResetFilter: 'reset-filter',
};
export interface ITreeData {
  /**
   * 唯一ID
   */
  id?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 文本的颜色
   */
  color?: string;
  /**
   * 显示的文本
   */
  text: string;
  /**
   * 携带的扩展数据
   */
  userData?: any;
  /**
   * 元素是否激活，未激活的元素文本置灰
   */
  active?: boolean;
  /**
   * 子元素
   */
  children?: ITreeData[];
  /**
   * 当数据量大的时候，不知道有多少子元素，可以预设一个数量
   */
  childrenCount?: number;
}

export interface HandExpandOptions {
  /**
   * 触发选中
   */
  select?: boolean;
  /**
   * 当元素不可见时，主动滚动到视口
   */
  scroll?: boolean;
  /**
   * 元素高亮显示
   */
  highlight?: boolean;
}
export class MatchRoute {
  /**
   * 路径的id
   */
  id: string = '';
  /**
   * 匹配到的位置信息
   */
  hint: number[] = [];
  constructor(id: string) {
    this.id = id;
  }
}
