const {test} = require('node:test');
const assert = require('node:assert/strict');
const {checkData} = require('./check-data.cjs');
test('every category and detail has usable offline data and a bundled photo', () => { assert.equal(checkData().length, 8); });
test('demo scores and reconstructed details are explicitly marked', () => {
  for (const place of checkData()) {
    assert.equal(place.dataStatus, 'reconstructed-demo');
    assert.equal(place.ratingSource, 'original-screenshot');
    assert.equal(place.detailsSource, 'reconstructed-editorial');
  }
});
