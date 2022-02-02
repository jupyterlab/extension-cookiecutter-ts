#!/usr/bin/env python
from pathlib import Path

PROJECT_DIRECTORY = Path.cwd()


def remove_path(path: str) -> None:
    """Remove the provided path.
    
    If the target path is a directory, remove it recursively.
    """
    if path.is_file():
        path.unlink()
    elif path.is_dir():
        for f in path.iterdir():
            remove_path(f)
        path.rmdir()


if __name__ == "__main__":

    if not "{{ cookiecutter.has_settings }}".lower().startswith("y"):
        remove_path(PROJECT_DIRECTORY / "schema")

    if "{{ cookiecutter.kind }}".lower() == "theme":
        for f in (
            "style/index.js",
            "style/base.css"
        ):
            remove_path(PROJECT_DIRECTORY / f)
    else:
        remove_path(PROJECT_DIRECTORY / "style/variables.css")

    if not "{{ cookiecutter.kind }}".lower() == "server":
        for f in (
            "{{ cookiecutter.python_name }}/handlers.py",
            "src/handler.ts",
            "jupyter-config"
        ):
            remove_path(PROJECT_DIRECTORY / f)

    if not "{{ cookiecutter.has_binder }}".lower().startswith("y"):
        remove_path(PROJECT_DIRECTORY / "binder")
