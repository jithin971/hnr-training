import { TestpipePipe } from './testpipe.pipe';

describe('TestpipePipe', () => {
  let pipe
  beforeEach(() => {
    pipe = new TestpipePipe();
  });
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });
  it('providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });

  it('providing a value returns value', () => {
    expect(pipe.transform('', 'http://avathar')).toBe('http://avathar');
  });

  it('asking for https returns https', () => {
    expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
  });
});
