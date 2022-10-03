import { Emitter } from "../index";
import { IUiMenuItem, MenuOptions, Msg } from "./index";

export function showMenuByMouseEvent(event: MouseEvent, newMenus: IUiMenuItem[]): void {
    const options: MenuOptions = {
        x: event.clientX + 2,
        y: Math.abs(event.clientY),
    };
    Emitter.emit(Msg.ShowMenu, options, newMenus || []);
}