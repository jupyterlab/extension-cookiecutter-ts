# JupyterLab extension-cookiecutter-ts

![Github Actions Status](https://github.com/jupyterlab/extension-cookiecutter-ts/workflows/CI/badge.svg)

A [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating
a JupyterLab extension in TypeScript with optionally a Python server extension.
    
> See also [extension-cookiecutter-js](https://github.com/jupyterlab/extension-cookiecutter-js)
for an extension in CommonJS.

## Use the template to create package

Install cookiecutter.

```
pip install cookiecutter
```

Use cookiecutter to generate a package, following the prompts to fill in the name and authorship of your new JupyterLab extension.

```
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts
```

If you'd like to generate a package for a specific JupyterLab release, use the `--checkout` option and give a tag or commit from this repository.

```
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout v1.0
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout v2.0
```

## A simple example

Your new extension includes a very simple example of a working extension. Use this example as a guide to build your own extension. Have a look at the [extension examples](https://github.com/jupyterlab/extension-examples) repository for more information on various JupyterLab features.
