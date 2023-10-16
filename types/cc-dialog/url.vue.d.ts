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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
} & {
    data: DialogUrlData;
} & {}>, {
    data: DialogUrlData;
}>;
export default _default;
