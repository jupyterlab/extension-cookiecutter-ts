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

    if not "{{ cookiecutter.has_server_extension }}".lower().startswith("y"):
        for f in (
            "{{ cookiecutter.python_name }}/handlers.py",
            "src/handler.ts",
            "jupyter-config"
        ):
            remove_path(PROJECT_DIRECTORY / f)

    if not "{{ cookiecutter.has_binder }}".lower().startswith("y"):
        remove_path(PROJECT_DIRECTORY / "binder")
