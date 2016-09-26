<<<<<<< 8f8bb609f36eb0eafd8403f0e14121ecbf6f34de
{{ cookiecutter.github_project_name }}
===============================

{{ cookiecutter.project_short_description }}

Installation
------------

To install using pip:

    $ pip install {{ cookiecutter.python_package_name }}
    $ jupyter nbextension enable --py --sys-prefix {{ cookiecutter.python_package_name  }}


For a development installation (requires npm, the JavaScript package manager),

    $ git clone https://github.com/{{ cookiecutter.github_organization_name  }}/{{ cookiecutter.github_project_name }}.git
    $ cd {{ cookiecutter.github_project_name }}
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix {{ cookiecutter.python_package_name }}
    $ jupyter nbextension enable --py --sys-prefix {{ cookiecutter.python_package_name }}
=======
# {{ cookiecutter.extension_name }}

{{ cookiecutter.project_short_description }}


## Prerequisites

* JupyterLab 0.3.0 or later

## Installation

If you use ``pip``, you can install this extension as follows:

```bash
pip install {{ cookiecutter.extension_name }}
jupyter labextension install --py --sys-prefix {{ cookiecutter.extension_name }}
jupyter labextension enable --py --sys-prefix {{ cookiecutter.extension_name }}
```
>>>>>>> Simplify the naming to just having a single extension_name.
