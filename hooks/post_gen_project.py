#!/usr/bin/env python
import sys
from pathlib import Path
from subprocess import CalledProcessError, check_call

PROJECT_DIRECTORY = Path.cwd()
TEMPLATE_URI = "https://github.com/jupyterlab/extension-cookiecutter-ts.git"

def remove_path(path: Path) -> None:
    """Remove the provided path.
    
    If the target path is a directory, remove it recursively.
    """
    if not path.exists():
        return

    if path.is_file():
        path.unlink()
    elif path.is_dir():
        for f in path.iterdir():
            remove_path(f)
        path.rmdir()


if __name__ == "__main__":

    remove_path(PROJECT_DIRECTORY / "template")
    remove_path(PROJECT_DIRECTORY / "copier.yml")

    try:
        import copier
    except ImportError:
        try:
            check_call([sys.executable, "-m", "pip", "install", "copier>=6.2.0"])
        except CalledProcessError:
            check_call([sys.executable, "-m", "pip", "install", "--pre", "copier>=6.2.0"])

    from copier import run_copy

    extension_name = input("What is your extension name?")
    module_name = extension_name.replace("-", "_")
    run_copy(TEMPLATE_URI, PROJECT_DIRECTORY / module_name, data={ "labextension_name": extension_name, "python_name": module_name})
