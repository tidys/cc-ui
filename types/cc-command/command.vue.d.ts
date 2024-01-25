import { PropType } from 'vue';
import { CmdData } from './const';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<CmdData[]>;
        default: () => never[];
    };
}, {
    show: import("vue").Ref<boolean>;
    commands: import("vue").Ref<{
        label: string;
        icon?: string | undefined;
        url?: string | undefined;
        visible?: boolean | undefined;
        cb: (() => void) | null;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<CmdData[]>;
        default: () => never[];
    };
}>>, {
    items: CmdData[];
}, {}>;
export default _default;
