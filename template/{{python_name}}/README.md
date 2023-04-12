# {{ python_name }}

[![Github Actions Status]({{ repository }}/workflows/Build/badge.svg)]({{ repository }}/actions/workflows/build.yml)
{%- if has_binder -%}
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/{{ repository|replace("https://github.com/", "") }}/main?urlpath=lab)

{%- endif %}
{{ project_short_description }}
{% if kind.lower() == 'server' %}
This extension is composed of a Python package named `{{ python_name }}`
for the server extension and a NPM package named `{{ labextension_name }}`
for the frontend extension.
{% endif %}
## Requirements

- JupyterLab >= 4.0.0b0

## Install

To install the extension, execute:

```bash
pip install {{ python_name }}
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall {{ python_name }}
```
{% if kind.lower() == 'server' %}
## Troubleshoot

If you are seeing the frontend extension, but it is not working, check
that the server extension is enabled:

```bash
jupyter server extension list
```

If the server extension is installed and enabled, but you are not seeing
the frontend extension, check the frontend extension is installed:

```bash
jupyter labextension list
```
{% endif %}
## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the {{ python_name }} directory
# Install package in development mode
pip install -e ".{% if test and kind.lower() == 'server' %}[test]{% endif %}"
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite{% if kind.lower() == 'server' %}
# Server extension must be manually installed in develop mode
jupyter server extension enable {{ python_name }}{% endif %}
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash{% if kind.lower() == 'server' %}
# Server extension must be manually disabled in develop mode
jupyter server extension disable {{ python_name }}{% endif %}
pip uninstall {{ python_name }}
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `{{ labextension_name }}` within that folder.
{% if test %}
### Testing the extension{% if kind.lower() == 'server' %}

#### Server tests

This extension is using [Pytest](https://docs.pytest.org/) for Python code testing.

Install test dependencies (needed only once):

```sh
pip install -e ".[test]"
# Each time you install the Python package, you need to restore the front-end extension link
jupyter labextension develop . --overwrite
```

To execute them, run:

```sh
pytest -vv -r ap --cov {{ python_name }}
```{% endif %}

#### Frontend tests

This extension is using [Jest](https://jestjs.io/) for JavaScript code testing.

To execute them, execute:

```sh
jlpm
jlpm test
```

#### Integration tests

This extension uses [Playwright](https://playwright.dev/docs/intro/) for the integration tests (aka user level tests).
More precisely, the JupyterLab helper [Galata](https://github.com/jupyterlab/jupyterlab/tree/master/galata) is used to handle testing the extension in JupyterLab.

More information are provided within the [ui-tests](./ui-tests/README.md) README.
{% endif %}
### Packaging the extension

See [RELEASE](RELEASE.md)
