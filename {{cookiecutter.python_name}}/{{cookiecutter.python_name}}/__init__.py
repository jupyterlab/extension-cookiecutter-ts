import json
from pathlib import Path

from ._version import __version__{% if cookiecutter.kind.lower() == 'server' %}
from .handlers import setup_handlers
{% endif %}


HERE = Path(__file__).parent.resolve()


with (HERE / "labextension" / "package.json").open() as fid:
    data = json.load(fid)


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": data["name"]
    }]
{% if cookiecutter.kind.lower() == 'server' %}


def _jupyter_server_extension_points():
    return [{
        "module": "{{ cookiecutter.python_name }}"
    }]


def _load_jupyter_server_extension(server_app):
    """Registers the API handler to receive HTTP requests from the frontend extension.

    Parameters
    ----------
    server_app: jupyterlab.labapp.LabApp
        JupyterLab application instance
    """
    setup_handlers(server_app.web_app)
    server_app.log.info("Registered {name} server extension".format(**data))


# For backward compatibility with notebook server - useful for Binder/JupyterHub
load_jupyter_server_extension = _load_jupyter_server_extension
{% endif %}
