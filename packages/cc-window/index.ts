import { generate } from 'shortid';
import CCWindow from './window.vue';

export class UiWindowOptions {
  id? = generate();
  width? = 400;
  height? = 400;
  resize?: boolean;
  title? = '';
  closeCB?: Function | null;
  responseCB?: Function | null;
}

export const ProvideKey = {
  CloseWindow: 'CloseWindow',
  ResponseCB: 'ResponseCB'
};

export { CCWindow };