# Making a {{ cookiecutter.extension_name }} release

This document guides a contributor through creating a release of {{ cookiecutter.extension_name }}.

## Check installed tools

### Clean the repository

To ensure a clean build, you can remove all non-tracked files with:

```bash
git clean -xfdi
```

This would ask you for confirmation before removing all untracked files.

### Create the release

We publish a Python source package and a Python universal binary wheel.
See the Python docs on [package uploading](https://packaging.python.org/distributing/#uploading-your-project-to-pypi)
for twine setup instructions and for why twine is the recommended uploading method.

```bash
npm version patch
git push origin master --tags
rm -rf dist
python setup.py sdist
python setup.py bdist_wheel --universal
twine upload dist/*
```
