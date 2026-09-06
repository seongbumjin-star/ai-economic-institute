import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('entrypoint assets use paths relative to the deployed directory', async () => {
  const html = await readFile('index.html', 'utf8');
  const assetPaths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(([, path]) => path)
    .filter((path) => !path.startsWith('#'));

  assert.ok(assetPaths.length > 0);
  for (const path of assetPaths) {
    assert.ok(
      !path.startsWith('/'),
      `${path} must not resolve from the domain root on GitHub Pages`,
    );
  }
});

test('Jekyll processing is disabled for GitHub Pages', async () => {
  await assert.doesNotReject(() => readFile('.nojekyll'));
});
