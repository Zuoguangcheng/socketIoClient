class Context {
  constructor(url, io) {
    this.url = url;
    this.io = io;
    this.vm = null;
    this.socket = null;
  }

  createIo() {
    return new Promise((resolve, reject) => {
      this.socket = this.io.connect(this.url);
      resolve(this.socket);
    });
  }

  getRoomDetail(id) {
    this.socket.emit('getRoomDetail', id);
  }

  sendMsg(id, record) {
    return new Promise(() => {
      this.socket.emit('chatMsg', id, record);
    });
  }

  leaveRooms(id, name) {
    this.socket.emit('leaveRooms', id, name);
  }

  selectRooms(id, name) {
    this.socket.emit('selectRooms', id, name);
  }
}

export default Context;
