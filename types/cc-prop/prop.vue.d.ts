declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 属性是否展开，主要是针对 Object/Array 设计的
     */
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示icon
     * false:不显示，并且不会占用icon的空间，主要事针对Vec2/Vec3/Vec4设计的
     */
    icon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示箭头，无论是否显示都会占用空间，主要是针对 Object/Array 设计的
     */
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * slide操作的步进
     */
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 在属性名字是否可以滑动，主要是方便用来触发value的step操作
     *
     * @example
     * ```ts
     * // 子组件需要如下对接slide行为
     * const emitter: TinyEmitter = inject<TinyEmitter>('emitter', new TinyEmitter());
     * emitter.on('slide', (n:number) => {
     *    console.log(n);
     * });
     * ```
     */
    slide: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 缩进
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 当为true时，prop.name背景将会带颜色
     */
    hint: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 属性名字的width样式，方便控制长度
     *
     * 默认为固定长度200px，如果要自动长度，可以设置为auto
     */
    headWidth: {
        type: StringConstructor;
        default: () => string;
    };
}, {
    title: import("vue").Ref<string>;
    tooltipElement: import("vue").Ref<HTMLElement | undefined>;
    tips: import("vue").Ref<HTMLElement | undefined>;
    isShowTips: import("vue").Ref<boolean>;
    arrow: import("vue").Ref<HTMLElement | undefined>;
    isExpand: import("vue").Ref<boolean>;
    text: import("vue").Ref<HTMLElement | undefined>;
    name: import("vue").Ref<string>;
    isHove: import("vue").Ref<boolean>;
    onMouseDown(event: MouseEvent): void;
    getArrowClass(): string;
    onHover(event: any): void;
    onClickArrow(): void;
    onOver(): void;
    getValueStyle(): string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("slide" | "changeExpand" | "update:expand")[], "slide" | "changeExpand" | "update:expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 属性是否展开，主要是针对 Object/Array 设计的
     */
    expand: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示icon
     * false:不显示，并且不会占用icon的空间，主要事针对Vec2/Vec3/Vec4设计的
     */
    icon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否显示箭头，无论是否显示都会占用空间，主要是针对 Object/Array 设计的
     */
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * slide操作的步进
     */
    step: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 在属性名字是否可以滑动，主要是方便用来触发value的step操作
     *
     * @example
     * ```ts
     * // 子组件需要如下对接slide行为
     * const emitter: TinyEmitter = inject<TinyEmitter>('emitter', new TinyEmitter());
     * emitter.on('slide', (n:number) => {
     *    console.log(n);
     * });
     * ```
     */
    slide: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 缩进
     */
    indent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 当为true时，prop.name背景将会带颜色
     */
    hint: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 属性名字的width样式，方便控制长度
     *
     * 默认为固定长度200px，如果要自动长度，可以设置为auto
     */
    headWidth: {
        type: StringConstructor;
        default: () => string;
    };
}>> & {
    onSlide?: ((...args: any[]) => any) | undefined;
    onChangeExpand?: ((...args: any[]) => any) | undefined;
    "onUpdate:expand"?: ((...args: any[]) => any) | undefined;
}, {
    tooltip: string;
    arrow: boolean;
    expand: boolean;
    step: number;
    slide: boolean;
    align: string;
    icon: boolean;
    indent: number;
    hint: boolean;
    headWidth: string;
}, {}>;
export default _default;
