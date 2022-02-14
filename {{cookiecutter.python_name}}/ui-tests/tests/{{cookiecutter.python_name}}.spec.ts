import { test } from '@jupyterlab/galata';
import { expect } from '@playwright/test';

/**
 * Don't load JupyterLab webpage before running the tests.
 * This is required to ensure we capture all log messages.
 */
test.use({ autoGoto: false })

test('should emit an activation console message', async ({ page }) => {
  const logs: string[] = [];

  page.on('console', (message) => {
    logs.push(message.text());
  });

  await page.goto();

  expect(
    logs.filter((s) => s === 'JupyterLab extension {{ cookiecutter.labextension_name }} is activated!')
  ).toHaveLength(1);
});
