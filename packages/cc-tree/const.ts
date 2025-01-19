export const ProvideKeys = {
  Emitter: 'emitter',
  NodeClick: 'node-click',
  NodeUnclick: 'node-unclick',
  NodeEnter: 'node-enter',
  NodeLeave: 'node-leave',
  NodeExpand: 'node-expand',
  NodeCollapse: 'node-collapsed',
  DefaultExpandAll: 'default-expand-all',
  CheckExpand: 'check-expand',
  CurrentSelect: 'current-select',
};
export const Msg = {
  SelectReset: 'select-reset',
  UpdateSelect: 'update-select',
  HandExpand: 'hand-expand',
};
export interface ITreeData {
  /**
   * 唯一ID
   */
  id?: string;
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
