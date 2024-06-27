import { PropType } from 'vue';
import { ButtonGroupItem } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ButtonGroupItem>;
        default: () => void;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    recover: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    el: import("vue").Ref<HTMLElement | undefined>;
    backgroundColor: import("vue").Ref<string>;
    onMouseEnter(event: MouseEvent): void;
    onMouseOver(event: MouseEvent): void;
    onMouseLeave(event: MouseEvent): void;
    onClick(event: MouseEvent): void;
    onMouseDown: (event?: MouseEvent | undefined) => void;
    onMouseUp(event: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ButtonGroupItem>;
        default: () => void;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    recover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    data: ButtonGroupItem;
    color: string;
    recover: boolean;
}, {}>;
export default _default;
