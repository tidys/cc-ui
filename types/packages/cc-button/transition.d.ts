interface styleOptions {
    background: string;
}
declare abstract class CocosUiElement {
    onMouseup(styles: styleOptions): void;
    onMousedown(styles: styleOptions): void;
    onMouseenter(styles: styleOptions): void;
    onMouseleave(styles: styleOptions): void;
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
