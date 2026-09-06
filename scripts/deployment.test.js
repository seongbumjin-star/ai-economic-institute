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

test('CSS is loaded by HTML instead of imported as a JavaScript module', async () => {
  const [html, main] = await Promise.all([
    readFile('index.html', 'utf8'),
    readFile('src/main.js', 'utf8'),
  ]);

  assert.match(
    html,
    /<link\s+rel="stylesheet"\s+href="\.\/src\/style\.css"\s*\/>/,
  );
  assert.doesNotMatch(main, /import\s+['"]\.\/style\.css['"]/);
});

test('Jekyll processing is disabled for GitHub Pages', async () => {
  await assert.doesNotReject(() => readFile('.nojekyll'));
});

test('navigation targets exist and no root-relative URLs break the project path', async () => {
  const [main, data] = await Promise.all([
    readFile('src/main.js', 'utf8'),
    import('../src/data.js'),
  ]);

  for (const [, target] of data.navItems) {
    assert.match(main, new RegExp(`id=["']${target.slice(1)}["']`), `${target} target must exist`);
  }
  assert.doesNotMatch(main, /(?:src|href)=["']\/(?!\/)/);
});
