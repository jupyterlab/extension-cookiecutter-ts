# {{ cookiecutter.extension_name }}

{{ cookiecutter.project_short_description }}


## Prerequisites

* JupyterLab 0.3.0 or later

## Installation

To install using pip:

```bash
pip install {{ cookiecutter.extension_name }}
jupyter labextension install --py --sys-prefix {{ cookiecutter.extension_name }}
jupyter labextension enable --py --sys-prefix {{ cookiecutter.extension_name }}
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
pip install -e .
jupyter labextension install --symlink --py --sys-prefix {{ cookiecutter.extension_name }}
jupyter labextension enable --py --sys-prefix {{ cookiecutter.extension_name }}
```

To rebuild the extension bundle:

```bash
npm run build
```

