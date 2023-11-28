export interface TableColumn {
    /**显示的名字 */
    title: string;
    /**列的唯一id */
    key: string;
    /**
     * 每一列的宽度
     */
    width?: number;
}
export interface TableData {
    /** TableColumn的key为TableData的object.key */
    [key: string]: any;
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
}
export interface LineData {
    /**行号 */
    index: number;
    /**改行的数据 */
    data: CellData[];
}
