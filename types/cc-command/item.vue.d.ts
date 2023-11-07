import { CmdData } from './const';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<CmdData>;
        required: true;
    };
}, {
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
} & {
    data: CmdData;
} & {}>, {}>;
export default _default;
