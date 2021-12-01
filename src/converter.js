export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    let result = '';
    for (const el of view) {
      result += String.fromCharCode(el);
    }
    return result;
  }
}
