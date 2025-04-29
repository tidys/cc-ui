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
  HoverReset: 'hover-reset',
  HandExpand: 'hand-expand',
  DoFilter: 'do-filter',
  ResetFilter: 'reset-filter',
};
export interface ITreeData {
  /**
   * 鼠标悬浮提示信息
   */
  tip?: string;
  /**
   * 唯一ID
   */
  id?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 默认图标
   */
  iconDefault?: string;
  /**
   * 文本的颜色
   */
  color?: string;
  /**
   * 显示的文本
   */
  text: string;
  /**
   * 前缀文本
   */
  prefix?: string;
  /**
   * 后缀文本
   */
  subfix?: string;
  /**
   * 后缀文本的最大显示宽度，超出将省略
   */
  subfixMaxWidth?: number;
  /**
   * 后缀的图标
   */
  subfixIcon?: string;
  /**
   * 后缀图标的提示信息
   */
  subfixIconTip?: string;
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
