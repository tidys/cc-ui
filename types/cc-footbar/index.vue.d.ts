declare const _default: import("vue").DefineComponent<{
    version: {
        type: StringConstructor;
        default: string;
    };
}, {
    verString: import("vue").Ref<string>;
    tips: import("vue").Ref<string>;
    commands: import("vue").Ref<{
        label?: string | undefined;
        icon?: string | undefined;
        cmds: {
            label: string;
            icon?: string | undefined;
            url?: string | undefined;
            visible?: boolean | undefined;
            cb: (() => void) | null;
        }[];
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    version?: unknown;
} & {
    version: string;
} & {}>, {
    version: string;
}>;
export default _default;