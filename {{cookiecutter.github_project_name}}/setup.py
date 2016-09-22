import sys
from distutils.core import setup


if 'develop' in sys.argv or any(a.startswith('bdist') for a in sys.argv):
    import setuptools

setup_args = dict(
    name                 = '{{ cookiecutter.python_package_name }}',
    packages             = ['{{ cookiecutter.python_package_name }}'],
    author               = '{{ cookiecutter.author_name }}',
    author_email         = '{{ cookiecutter.author_email }}',
    include_package_data = True
)

if __name__ == '__main__':
    setup(**setup_args)
