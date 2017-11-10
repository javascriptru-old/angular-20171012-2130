import { SexPipe } from './sex.pipe';

describe('SexPipe', () => {
  it('create an instance', () => {
    const pipe = new SexPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new SexPipe();
    expect(pipe.transform(3)).toBe(3);
  });
});
