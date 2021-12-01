import getBuffer from '../arrayBuffer';
import Converter from '../converter';

test(('Converter toString'), () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBufferConverter = new Converter();
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe(expected);
  expect(`${arrayBufferConverter}`).toBe(expected);
});
