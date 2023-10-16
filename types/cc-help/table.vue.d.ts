import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<string[]>;
        default: () => never[];
    };
}, {
    onClickTab(item: string, index: any): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    items?: unknown;
} & {
    items: string[];
} & {}>, {
    items: string[];
}>;
export default _default;
