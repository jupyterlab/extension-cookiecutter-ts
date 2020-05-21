# {{ cookiecutter.extension_name }}

![Github Actions Status]({{ cookiecutter.repository }}/workflows/Build/badge.svg)
{%- if cookiecutter.has_binder.lower().startswith('y') -%}
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/{{ cookiecutter.repository|replace("https://github.com/", "") }}/master?urlpath=lab)
{%- endif %}

{{ cookiecutter.project_short_description }}

{% if cookiecutter.has_server_extension.lower().startswith('y') %}
This extension is composed of a Python package named `{{ cookiecutter.extension_name|replace("-", "_") }}`
for the server extension and a NPM package named `{{ cookiecutter.extension_name|replace("_", "-") }}`
for the frontend extension.
{% endif %}

## Requirements

* JupyterLab >= 2.0

## Install
{% if cookiecutter.has_server_extension.lower().startswith('y') %}
Note: You will need NodeJS to install the extension.

```bash
pip install {{ cookiecutter.extension_name|replace("-", "_") }}
jupyter lab build
```

## Troubleshoot

If you are seeing the frontend extension but it is not working, check
that the server extension is enabled:

```bash
jupyter serverextension list
```

If the server extension is installed and enabled but you are not seeing
the frontend, check the frontend is installed:

```bash
jupyter labextension list
```

If it is installed, try:

```bash
jupyter lab clean
jupyter lab build
```
{% else %}
```bash
jupyter labextension install {{ cookiecutter.extension_name|replace("_", "-") }}
```
{% endif %}
## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to {{ cookiecutter.extension_name }} directory
{% if cookiecutter.has_server_extension.lower().startswith('y') %}
# Install server extension
pip install -e .
# Register server extension
jupyter serverextension enable --py {{ cookiecutter.extension_name|replace("-", "_") }} --sys-prefix
{% endif %}
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
{% if cookiecutter.has_server_extension.lower().startswith('y') %}pip uninstall {{ cookiecutter.extension_name|replace("-", "_") }}{% endif %}
jupyter labextension uninstall {{ cookiecutter.extension_name|replace("_", "-") }}
```
