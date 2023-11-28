import CCWindow from './window.vue';
export declare class UiWindowOptions {
    id?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    resize?: boolean;
    title?: string | undefined;
    closeCB?: () => void | null;
    responseCB?: () => void | null;
}
export declare const ProvideKey: {
    CloseWindow: string;
    ResponseCB: string;
};
export { CCWindow };
