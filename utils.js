/** Pure helpers shared by the browser and Node tests. */
export function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) throw new RangeError('Bytes must be non-negative.');
  if (bytes < 1024) return Math.round(bytes) + ' B';
  if (bytes < 1024 ** 2) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1024 ** 2).toFixed(2) + ' MB';
}
export function scaleDimensions(width, height, maxDimension) {
  if (![width, height].every(n => Number.isInteger(n) && n > 0)) throw new RangeError('Invalid image dimensions.');
  if (!Number.isInteger(maxDimension) || maxDimension < 0) throw new RangeError('Invalid maximum dimension.');
  if (!maxDimension || Math.max(width, height) <= maxDimension) return { width, height };
  const scale = maxDimension / Math.max(width, height);
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) };
}
export function outputFileName(name, mimeType) {
  const ext = { 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/png': 'png' }[mimeType];
  if (!ext) throw new TypeError('Unsupported output format.');
  const base = name.replace(/\.[^.]+$/, '').trim() || 'image';
  return base + '-optimized.' + ext;
}
export function sizeChangePercent(original, result) {
  if (!Number.isFinite(original) || original <= 0 || !Number.isFinite(result) || result < 0) throw new RangeError('Invalid file sizes.');
  return Math.round((1 - result / original) * 100);
}
