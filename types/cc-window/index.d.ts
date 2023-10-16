import CCWindow from './window.vue';
export declare class UiWindowOptions {
    id?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    resize?: boolean;
    title?: string | undefined;
    closeCB?: Function | null;
    responseCB?: Function | null;
}
export declare const ProvideKey: {
    CloseWindow: string;
    ResponseCB: string;
};
export { CCWindow };
