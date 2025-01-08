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
}, {}>;
export default _default;
