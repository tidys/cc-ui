import { Emitter } from '../index';
import { UiWindowOptions } from '../cc-window/index';

export const DialogMsg = {
  ShowDialog: 'show-dialog'
};

export class DialogOptions extends UiWindowOptions {
  /**
   * DefineComponent | null,// 组件实例
   */
  comp?: any;
  /**
   * 传递给组件的数据
   */
  data?: any;
  clickOutsideClose?: boolean;
}
/**
 *  这种辅助类的函数一般放在const里面
 */
export function showDialog(opts: DialogOptions) {
  Emitter.emit(DialogMsg.ShowDialog, opts);
}
