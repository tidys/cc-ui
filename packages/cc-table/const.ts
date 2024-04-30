export interface TableColumn {
  /**显示的名字 */
  title: string;
  /**列的唯一id */
  key: string;
  /**
   * 每一列的宽度
   */
  width?: number;

  /**
   * 基于字符换行
   */
  breakChar?: boolean;
}
/**
 * 主要是方便设置单元格的属性
 */
export interface TableDataValue {
  /**
   * 单元格的值
   */
  value: string | number;
  /**
   * 单元格的背景颜色
   */
  color?: string;
}
export interface TableData {
  /**
   * 用户可以自定定义数据，这个CellData数据在table事件中会透传给回调
   */
  ['userData']?: any;
  /** TableColumn的key为TableData的object.key */
  [key: string]: string | number | TableDataValue | any;
}

export interface CellData {
  /**
   * 当前第几列
   */
  columnIndexCurrent: number;
  /**
   * 总列数
   */
  columnIndexTotal: number;

  /**
   * 当前行数
   */
  rowIndexCurrent: number;
  /**
   * 总行数
   */
  rowIndexTotal: number;
  /**
   * 对应的column key值
   */
  key: string;
  /**当前的cell值 */
  value: any;
  /**
   * 列的宽度
   */
  width?: number;
  /**
   * 单元格的背景颜色
   */
  bgColor?: string;
  /**
   * word-break: break-all;
   */
  breakChar?: boolean;
  /**
   * 用户透传的数据，方便上层判断使用
   */
  userData?: any;
}

export interface LineData {
  /**行号 */
  index: number;
  /**行数据 */
  data: CellData[];
}
export const ProvideMsg = {
  CellClick: 'CellClick',
  CellContextMenu: 'CellContextMenu',
};
export const EventMsg = {
  SelectLine: 'SelectLine',
};
