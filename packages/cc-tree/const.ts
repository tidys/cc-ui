export const ProvideKeys = {
  Emitter: 'emitter',
  NodeClick: 'node-click',
  NodeExpand: 'node-expand',
  NodeCollapse: 'node-collapsed',
};
export const Msg = {
  SelectReset: 'select-reset',
  HandSelect: 'hand-select',
};
export interface ITreeData {
  /**
   * 唯一ID
   */
  id?: string;

  text: string;
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
