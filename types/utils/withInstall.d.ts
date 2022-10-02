import { App, Plugin } from 'vue';
export declare type WithInstallType<T> = T & Plugin;
export declare const withInstall: <T>(comp: T, customName?: string | undefined) => (T & ((app: App<any>, ...options: any[]) => any) & {
    install?: ((app: App<any>, ...options: any[]) => any) | undefined;
}) | (T & {
    install: (app: App<any>, ...options: any[]) => any;
});
export default withInstall;
