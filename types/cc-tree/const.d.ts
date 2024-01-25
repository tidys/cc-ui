export declare const ProvideKeys: {
    Emitter: string;
    NodeClick: string;
    NodeExpand: string;
    NodeCollapse: string;
};
export declare const Msg: {
    SelectReset: string;
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
