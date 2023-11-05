export declare const CmdMsg: {
    ShowCmd: string;
    CloseCmd: string;
};
export interface CmdData {
    label: string;
    cb: (() => void) | null;
}
export declare function showCommand(cmdArray: CmdData[]): void;
export declare function closeCommand(): void;
