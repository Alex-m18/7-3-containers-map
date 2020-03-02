import ErrorRepository from '../ErrorRepository';

test('Should correctly work with ErrorRepository', () => {
  const errRep = new ErrorRepository();
  expect(errRep.translate(1)).toBe('Error description 1');
  expect(errRep.translate(2)).toBe('Error description 2');
  expect(errRep.translate(3)).toBe('Error description 3');
  expect(errRep.translate(4)).toBe('Unknown error');
});
