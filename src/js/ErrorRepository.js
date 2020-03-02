/**
 * ErrorRepository class. Stores error codes and descriptions
 * @class
 */
class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Error description 1'],
      [2, 'Error description 2'],
      [3, 'Error description 3'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

export default ErrorRepository;
