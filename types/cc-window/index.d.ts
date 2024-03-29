/// <reference types="short-uuid" />
import CCWindow from './window.vue';
export declare class UiWindowOptions {
    id?: import("short-uuid").SUUID | undefined;
    width?: number | undefined;
    height?: number | undefined;
    resize?: boolean;
    title?: string | undefined;
    closeCB?: () => void | null;
    responseCB?: (data: UiWindowOptions) => void | null;
}
export declare const ProvideKey: {
    CloseWindow: string;
    ResponseCB: string;
};
export { CCWindow };
