# {{ cookiecutter.python_name }}

![Github Actions Status]({{ cookiecutter.repository }}/workflows/Build/badge.svg)
{%- if cookiecutter.has_binder.lower().startswith('y') -%}
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/{{ cookiecutter.repository|replace("https://github.com/", "") }}/master?urlpath=lab)
{%- endif %}

{{ cookiecutter.project_short_description }}

{% if cookiecutter.has_server_extension.lower().startswith('y') %}
This extension is composed of a Python package named `{{ cookiecutter.python_name }}`
for the server extension and a NPM package named `{{ cookiecutter.labextension_name }}`
for the frontend extension.
{% endif %}

## Requirements

* JupyterLab >= 2.0

## Install
Note: You will need NodeJS to install the extension.

```bash
pip install {{ cookiecutter.python_name }}
```

{% if cookiecutter.has_server_extension.lower().startswith('y') %}
## Troubleshoot

If you are seeing the frontend extension but it is not working, check
that the server extension is enabled:

```bash
jupyter server extension list
```

If the server extension is installed and enabled but you are not seeing
the frontend, check the frontend is installed:

```bash
jupyter labextension list
```

{% endif %}
## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to {{ cookiecutter.python_name }} directory
# Install package
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop .
# Rebuild Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in one terminal tab
jupyter lab
```

Now every change will be built locally and bundled into JupyterLab. Be sure to refresh your browser page after saving file changes to reload the extension (note: you'll need to wait for webpack to finish, which can take 10s+ at times).

### Uninstall

```bash
pip uninstall {{ cookiecutter.python_name }}
jupyter labextension uninstall {{ cookiecutter.labextension_name }}
```
