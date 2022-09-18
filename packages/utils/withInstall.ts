import { App, Plugin } from 'vue'

export type WithInstallType<T> = T & Plugin;
export const withInstall = <T>(comp: T, customName?: string): T & Plugin => {
    const c = comp as any;
    c.install = (app: App, name?: string) => {
        const defaultName = c.name || "";
        app.component(customName || name || defaultName, comp)
    }
    return c as T & Plugin;
}
export default withInstall;
