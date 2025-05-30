import { PropType } from 'vue';
import { ITreeData } from './const';
declare const _default: import("vue").DefineComponent<{
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
    /**
     * 背景色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 选中后，再点击是否响应点击事件
     */
    alwayResponseClick: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    getClass(item: string, index: number): string;
    highlightCharIndex: import("vue").Ref<number[]>;
    show: import("vue").Ref<boolean>;
    isFlash: import("vue").Ref<boolean>;
    rootEl: import("vue").Ref<HTMLDivElement | undefined>;
    childrenElements: import("vue").Ref<never[]>;
    fold: import("vue").Ref<boolean>;
    backgroundColor: import("vue").Ref<string>;
    selected: boolean;
    doFold: (b: boolean) => void;
    doSelect: (scroll?: boolean) => void;
    doHover(): void;
    mouseEnter: () => void;
    mouseLeave: () => void;
    ShowIcon: () => false;
    onFold(): void;
    mouseMenu(event: MouseEvent): void;
    onClick(): void;
    getIconClass(): string | undefined;
    getSubfixIconClass(): string;
    getSubfixStyle(): string;
    getPrefixStyle(): string;
    getIconStyle(): string;
    getSubfixIconStyle(): string;
    getArrowClass(): "iconfont icon_arrow_down" | "iconfont icon_arrow_right";
    getArrowStyle(): string;
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
    /**
     * 背景色
     */
    color: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 选中后，再点击是否响应点击事件
     */
    alwayResponseClick: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: string;
    value: ITreeData;
    indent: number;
    alwayResponseClick: boolean;
}, {}>;
export default _default;
