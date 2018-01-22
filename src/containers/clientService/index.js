import * as io from 'socket.io-client';
import Context from './context';

let url = 'http://39.106.118.108:3000';
let cxt = null;

export function getCxt() {
  if (cxt === null) {
    cxt = new Context(url, io);
  }
  return cxt;
}
