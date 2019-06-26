import { assert } from 'chai';

describe('Feature flaky tests', () => {
  this.retries(4);

  it('1 step', () => {
    console.log('1');
  });

  it('2 step', () => {
    console.log('2');
    assert(false);
  });
});
