# JupyterLab extension template

[![Github Actions Status](https://github.com/jupyterlab/extension-cookiecutter-ts/workflows/CI/badge.svg)](https://github.com/jupyterlab/extension-cookiecutter-ts/actions/workflows/main.yml)

A [copier](https://copier.readthedocs.io) template for creating
a JupyterLab extension. Three kinds of extension are supported:
- _frontend_: Pure frontend extension written in TypeScript.
- _server_: Extension with frontend (in TypeScript) and backend (in Python) parts.
- _theme_: Theme for JupyterLab (using CSS variables).

## Use the template to create package

1. Install copier and some plugins.

```sh
pip install "copier>=7.1.0" jinja2-time
```

2. Go into the extension directory

```sh
mkdir myextension
cd myextension
```

3. Use copier to generate a package, following the prompts to fill in the name and authorship of your new JupyterLab extension.

```
copier https://github.com/jupyterlab/extension-cookiecutter-ts .
```

The available options are:

- `kind`:
  * frontend --> Extension has only a frontend (TypeScript + CSS) part
  * server --> Extension has frontend and backend (new Python endpoint handlers for the server) parts
  * theme --> Extension provides a new theme (and nothing else)
- `author_name`: The extension author name
- `author_email`: The extension author email
- `labextension_name`: Extension name
- `python_name`: Pythonic extension name (if your extension has no server part, it will only be used to distribute the extension as a Python package)
- `project_short_description`: Extension short description
- `has_settings`: Whether the extension will have user settings or not.
- `has_binder`: Whether to set up [binder](https://mybinder.readthedocs.io/en/latest/) for the extension or not.
- `test`: Whether to add test set ups and skeletons for the extension or not
- `repository`: Version Control System repository URI

If you'd like to generate a package for a older release, use the `--vcs-ref` option and give a tag or commit from this repository.

```sh
copier --vcs-ref v4.0.0 https://github.com/jupyterlab/extension-cookiecutter-ts
```

> If you are looking for a template compatible with JupyterLab version prior to 4.0.0, look at 
> the [cookiecutter template](https://github.com/jupyterlab/extension-cookiecutter-ts).

## A simple example

Your new extension includes a very simple example of a working extension. Use this example as a guide to build your own extension. Have a look at the [extension examples](https://github.com/jupyterlab/extension-examples) repository for more information on various JupyterLab features.
