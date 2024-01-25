import { PropType } from 'vue';
import { DialogUrlData } from './const';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<DialogUrlData>;
        required: true;
        default: () => DialogUrlData;
    };
}, {
    head1: import("vue").Ref<string>;
    head2: import("vue").Ref<string>;
    aLink: import("vue").Ref<string>;
    href: import("vue").Ref<string>;
    aElement: import("vue").Ref<HTMLAnchorElement | undefined>;
    timerString: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<DialogUrlData>;
        required: true;
        default: () => DialogUrlData;
    };
}>>, {
    data: DialogUrlData;
}, {}>;
export default _default;
