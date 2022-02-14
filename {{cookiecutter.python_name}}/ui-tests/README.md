# Integration Testing

This folder contains the integration tests of the extension.

They are defined using [Playwright](https://playwright.dev/docs/intro/) test runner
and [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) helper.

The Playwright configuration is defined in [playwright.config.js](../playwright.config.js)
in the root directory.

The JupyterLab server configuration to use for the integration test is defined
in [jupyter_server_test_config.py](../jupyter_server_test_config.py) in the root directory.

The default configuration will produce video for failing tests and an HTML report.

## Run the tests

> All commands are assumed to be executed from the root directory

To run the tests, you need to:

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

2. Start JupyterLab

```sh
jupyter lab --config ./ui-tests/jupyter_server_test_config.py
```

> This assumes you have installed the extension.

3. Execute in another console the [Playwright](https://playwright.dev/docs/intro) tests:

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
jlpm playwright test
```

The report will be opened in your browser at the end of the tests execution.

## Update the tests snapshots

> All commands are assumed to be executed from the root directory

If you are comparing snapshots to validate your tests, you may need to update
the reference snapshots stored in the repository. To do that, you need to:

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

2. Start JupyterLab

```sh
jupyter lab --config ./ui-tests/jupyter_server_test_config.py
```

> This assumes you have installed the extension.

3. Execute in another console the [Playwright](https://playwright.dev/docs/intro) tests:

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
jlpm playwright test -u
```

> Some discrepancy may occurs between the snapshots generated on your computer and
> the one generated on the CI. To ease updating the snapshots on a PR, you can
> type `please update playwright snapshots` to trigger the update by a bot on the CI.
> Once the bot has computed new snapshots, it will commit them to the PR branch.

## Create tests

> All commands are assumed to be executed from the root directory

To create tests, the easiest way is to use the code generator tool of playwright:

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

2. Start JupyterLab

```sh
jupyter lab --config ./ui-tests/jupyter_server_test_config.py
```

> This assumes you have installed the extension.

3. Execute in another console the [Playwright](https://playwright.dev/docs/intro) code generator:

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
jlpm playwright codegen localhost:8888
```

## Debug tests

> All commands are assumed to be executed from the root directory

To debug tests, a good way is to use the inspector tool of playwright:

1. Compile the extension:

```sh
jlpm install
jlpm build:prod
```

2. Start JupyterLab

```sh
jupyter lab --config ./ui-tests/jupyter_server_test_config.py
```

> This assumes you have installed the extension.

3. Execute in another console the [Playwright](https://playwright.dev/docs/intro) tests
   in debug mode:

```sh
cd ./ui-tests
jlpm install
jlpm playwright install
PWDEBUG=1 jlpm playwright test
```
