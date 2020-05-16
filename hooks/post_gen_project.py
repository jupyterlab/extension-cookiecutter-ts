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
            "{{ cookiecutter.extension_name }}",
            "jupyter-config",
            "MANIFEST.in",
            "pyproject.toml",
            "setup.py",
            "src/{{ cookiecutter.extension_name }}.ts",
        ):
            remove_path(PROJECT_DIRECTORY / f)
    else:
        if "-" in "{{ cookiecutter.extension_name }}":
            for f in (
                "{{ cookiecutter.extension_name }}",
                "jupyter-config/{{ cookiecutter.extension_name }}.json",
            ):
                absolute_f = PROJECT_DIRECTORY / f
                absolute_f.rename(absolute_f.parent / absolute_f.name.replace("-", "_"))
        if "_" in "{{ cookiecutter.extension_name }}":
            for f in ("src/{{ cookiecutter.extension_name }}.ts", ):
                absolute_f = PROJECT_DIRECTORY / f
                absolute_f.rename(absolute_f.parent / absolute_f.name.replace("_", ""))

    if not "{{ cookiecutter.has_binder }}".lower().startswith("y"):
        remove_path(PROJECT_DIRECTORY / "binder")
