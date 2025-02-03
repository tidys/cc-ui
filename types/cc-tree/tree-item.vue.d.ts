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
    ShowIcon: () => false;
    onFold(): void;
    mouseEnter(): void;
    mouseMenu(event: MouseEvent): void;
    mouseLeave(): void;
    onClick(): void;
    getIconClass(): string;
    getIconStyle(): string;
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
}>>, {
    color: string;
    value: ITreeData;
    indent: number;
}, {}>;
export default _default;
