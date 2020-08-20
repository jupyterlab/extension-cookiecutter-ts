#!/usr/bin/env python
import os
from pathlib import Path

PROJECT_DIRECTORY = Path.cwd()


def remove_path(path):
    if path.is_file():
        path.unlink()
    elif path.is_dir():
        for f in path.iterdir():
            remove_path(f)
        path.rmdir()


if __name__ == "__main__":

    if not "{{ cookiecutter.has_server_extension }}".lower().startswith("y"):
        for f in (
            "{{ cookiecutter.labextension_name }}/handlers.py",
            "jupyter-config"
        ):
            remove_path(PROJECT_DIRECTORY / f)

    if not "{{ cookiecutter.has_binder }}".lower().startswith("y"):
        remove_path(PROJECT_DIRECTORY / "binder")
