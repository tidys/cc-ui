import { PropType } from "vue";
interface Option {
    label: string;
    value: string | number;
}
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<Option[]>;
        required: true;
        default(): never[];
    };
    value: (StringConstructor | NumberConstructor)[];
}, {
    curValue: any;
    onSelectChange(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:value" | "change" | "update:data")[], "update:value" | "change" | "update:data", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    value?: unknown;
} & {
    data: Option[];
} & {
    value?: string | number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
}, {
    data: Option[];
}>;
export default _default;
