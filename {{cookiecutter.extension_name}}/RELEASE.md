# Making a {{ cookiecutter.extension_name }} release

This document guides a contributor through creating a release of {{ cookiecutter.extension_name }}.


We publish a Python source package and a Python universal binary wheel.

## Update version number

Update the version number in `setup.py` and in `package.json`.

## Remove generated files

Do `npm run clean` to remove any old Javascript builds. Delete the `dist/` folder to remove old python package builds.

```bash
npm run clean
rm -rf dist/
```

## Build the package

First build the Javascript extension bundle, then build the python package and wheel.

```bash
npm run build
python setup.py sdist
python setup.py bdist_wheel --universal
```

## Upload the package

Upload the python package with [twine](https://github.com/pypa/twine). See the Python documentation on [package uploading](https://packaging.python.org/distributing/#uploading-your-project-to-pypi)
for [twine](https://github.com/pypa/twine) setup instructions and for why twine is the recommended uploading method.

```bash
twine upload dist/*
```
