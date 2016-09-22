# jupyterlab-extension-cookiecutter

a [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating
a JupyterLab extension

## Use the template to create package

Install cookiecutter.

```
pip install cookiecutter
```

Use it to generate a package, following prompts fill in the name and authorship
of your new JupyterLab extension.

```
cookiecutter https://github.com/jupyter/jupyterlab-extension-cookiecutter
```

## Install and enable your extension

```
npm install
npm run build
python setup.py install
```

Finally, follow
[this documentation](http://jupyterlab-tutorial.readthedocs.io/en/latest/labextensions.html#installing-and-enabling-extensions)
to "install" (register) your extension with JupyterLab and enable it.
