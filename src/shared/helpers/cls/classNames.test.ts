import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    const result = classNames('someClass', {}, []);
    expect(result).toBe('someClass');
  });
});
