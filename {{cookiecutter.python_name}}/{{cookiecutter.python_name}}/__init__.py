from ._version import __version__{% if cookiecutter.kind.lower() == 'server' %}
from .handlers import setup_handlers{% endif %}


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "{{ cookiecutter.labextension_name }}"
    }]{% if cookiecutter.kind.lower() == 'server' %}


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
    name = "{{ cookiecutter.python_name }}"
    server_app.log.info(f"Registered {name} server extension")


# For backward compatibility with notebook server - useful for Binder/JupyterHub
load_jupyter_server_extension = _load_jupyter_server_extension{% endif %}
