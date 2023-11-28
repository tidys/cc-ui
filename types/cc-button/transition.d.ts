interface StyleOptions {
    background: string;
}
declare abstract class CocosUiElement {
    onMouseup(styles: StyleOptions): void;
    onMousedown(styles: StyleOptions): void;
    onMouseenter(styles: StyleOptions): void;
    onMouseleave(styles: StyleOptions): void;
}
export declare class Transition implements CocosUiElement {
    private instance;
    theme: {
        background: string;
    };
    constructor(transition: string, props: any);
    onMousedown(): void;
    onMouseenter(): void;
    onMouseleave(): void;
    onMouseup(): void;
}
export {};
