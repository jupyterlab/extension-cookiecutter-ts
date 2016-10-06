# jupyterlab-extension-cookiecutter

A [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating
a JupyterLab extension in TypeScript. (See also
[jupyterlab-extension-cookiecutter-js](https://github.com/jupyter/jupyter-extension-cookiecutter-js)
for an extension in CommonJS.)

## Use the template to create package

Install cookiecutter.

```
pip install cookiecutter
```

Use cookiecutter to generate a package, following the prompts to fill in the name and authorship of your new JupyterLab extension.

```
cookiecutter https://github.com/jupyter/jupyterlab-extension-cookiecutter
```

## A simple example

The ``src/`` directory of your new extension includes a very simple example of a working extension, written in TypeScript. Use this example as a guide to build your own extension.

## Package names

This cookiecutter template creates a JupyterLab extension composed of a Python package and an npm package:

- The *npm package* is declared as a private package, so it cannot be published to the public npm package repository. The npm package is used to retrieve npm dependencies and provide a framework for the bundling of the JavaScript.

- The *Python package* is published to PyPI, the Python package repository, and contains the generated JupyterLab extension JavaScript bundle.

To simplify the developer experience and lessen confusion between the different packages, the cookiecutter template unifies the extension name, the Python package name, the Python module name, and the npm package name to the same name. Make sure this name (`extension_name`) is a valid Python module name (e.g., it cannot contain dashes).

We suggest that simple extension names start with `jupyterlab_` and use underscores if needed to improve readability, such as `jupyterlab_myextension`.
