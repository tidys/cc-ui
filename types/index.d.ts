import { App } from 'vue';
import { TinyEmitter } from 'tiny-emitter';
import { showMenuByMouseEvent } from "./cc-menu/method";
export declare const install: (app: App) => void;
export declare const Emitter: TinyEmitter;
export declare const Methods: {
    CCMenu: {
        showMenuByMouseEvent: typeof showMenuByMouseEvent;
    };
};
declare const _default: {
    install: (app: App<any>) => void;
    Methods: {
        CCMenu: {
            showMenuByMouseEvent: typeof showMenuByMouseEvent;
        };
    };
    Emitter: TinyEmitter;
};
export default _default;
