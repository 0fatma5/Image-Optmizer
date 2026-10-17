import test from 'node:test';
import assert from 'node:assert/strict';
import { formatBytes, scaleDimensions, outputFileName, sizeChangePercent } from '../utils.js';

test('formatBytes handles bytes, kilobytes and megabytes', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(1024), '1.0 KB');
  assert.equal(formatBytes(2 * 1024 ** 2), '2.00 MB');
  assert.throws(() => formatBytes(-1), RangeError);
});
test('scaleDimensions preserves aspect ratio and avoids upscaling', () => {
  assert.deepEqual(scaleDimensions(4000, 2000, 1000), { width: 1000, height: 500 });
  assert.deepEqual(scaleDimensions(400, 300, 800), { width: 400, height: 300 });
  assert.deepEqual(scaleDimensions(400, 300, 0), { width: 400, height: 300 });
  assert.deepEqual(scaleDimensions(300, 600, 150), { width: 75, height: 150 });
  assert.throws(() => scaleDimensions(0, 20, 100), RangeError);
});
test('outputFileName uses the actual output format', () => {
  assert.equal(outputFileName('holiday.photo.png', 'image/jpeg'), 'holiday.photo-optimized.jpg');
  assert.equal(outputFileName('image.png', 'image/webp'), 'image-optimized.webp');
  assert.equal(outputFileName('image', 'image/png'), 'image-optimized.png');
  assert.throws(() => outputFileName('a.jpg', 'image/invalid'), TypeError);
});
test('sizeChangePercent reports savings or growth', () => {
  assert.equal(sizeChangePercent(100, 75), 25);
  assert.equal(sizeChangePercent(100, 130), -30);
  assert.throws(() => sizeChangePercent(0, 5), RangeError);
});
