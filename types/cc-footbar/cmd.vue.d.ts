import { FootCmd } from './const';
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<FootCmd>;
        required: true;
    };
}, {
    onClick(): void;
    iconClass(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
} & {
    data: FootCmd;
} & {}>, {}>;
export default _default;
