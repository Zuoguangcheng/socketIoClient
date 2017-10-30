class Context {
  constructor(url, io) {
    this.url = url;
    this.io = io;
    this.vm = null;
    this.socket = null;
  }

  createIo() {
    this.socket = this.io.connect(this.url);
    this.socket.on('chatMsg', value => {
      console.log('收到信息value', value);
    })
  }

  getRooms() {
    return new Promise((resolve, reject) => {
      this.socket.on('rooms', (info) => {
        resolve(info);
      });
    });
  }

  getRoomDetail(id) {
    return new Promise((resolve, reject) => {
      this.socket.emit('getChannel', id);
      this.socket.on('roomsDetail', info => {
        resolve(info);
      });
    });
  }

  sendMsg(id, record) {
    return new Promise((resolve) => {
      this.socket.emit('chatMsg', id, record);
    });
  }
}

export default Context;
