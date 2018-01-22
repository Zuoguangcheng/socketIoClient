import * as io from 'socket.io-client';
import Context from './context';

let url = 'http://chat.zuoguangcheng.top:3000';
let cxt = null;

export function getCxt() {
  if (cxt === null) {
    cxt = new Context(url, io);
  }
  return cxt;
}
