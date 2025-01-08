import { PropType } from 'vue';
import { ITreeData } from './const';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<ITreeData[]>;
        default: () => never[];
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 默认是否都展开
     */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 默认展开的keys
     */
    expandKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
}, {
    treeElement: import("vue").Ref<HTMLDivElement | undefined>;
    childrenElements: import("vue").Ref<import("vue").DefineComponent<{
        value: {
            type: PropType<ITreeData>;
            default: () => {
                text: string;
            };
            required: true;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }, {
        isFlash: import("vue").Ref<boolean>;
        rootEl: import("vue").Ref<HTMLDivElement | undefined>;
        childrenElements: import("vue").Ref<never[]>;
        fold: import("vue").Ref<boolean>;
        backgroundColor: import("vue").Ref<string>;
        selected: boolean;
        doFold: (b: boolean) => void;
        doSelect: (scroll?: boolean) => void;
        onFold(): void;
        mouseEnter(): void;
        mouseLeave(): void;
        onClick(): void;
        getIconClass(): "iconfont icon_arrow_down" | "iconfont icon_arrow_right";
        getIconStyle(): string;
        getNameStyle(): string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<ITreeData>;
            default: () => {
                text: string;
            };
            required: true;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    }>>, {
        color: string;
        value: ITreeData;
        indent: number;
    }, {}>[]>;
    /**
     * 手动展开某个节点，会自动连同父节点一并展开
     * @param options
     *  select 是否选中
     *  highlight: 是否高亮
     */
    handExpand(id: string, options?: {
        select?: boolean;
        highlight?: boolean;
    }): void;
    /**
     * 手动选中已经展开的节点，如果这个节点没有展开，是不会触发选中的
     */
    handChoose(id: string): void;
    /**
     * 手动选择根节点下的某个节点
     */
    handSelect(index?: number): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<ITreeData[]>;
        default: () => never[];
        required: true;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 默认是否都展开
     */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 默认展开的keys
     */
    expandKeys: {
        type: PropType<string[]>;
        default: () => never[];
    };
}>>, {
    value: ITreeData[];
    bgColor: string;
    defaultExpandAll: boolean;
    expandKeys: string[];
}, {}>;
export default _default;
