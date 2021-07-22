import Plugin from '../src';

describe('@jihchi/vite-plugin-rescript', () => {
  it('works', () => {
    const actual = Plugin();
    expect(actual).toHaveProperty('name', 'vite-plugin-rescript');
    expect(actual).toHaveProperty('configResolved');
    expect(actual.configResolved).toBeInstanceOf(Function);
  });
});
