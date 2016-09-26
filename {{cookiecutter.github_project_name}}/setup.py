import os
import sys
from distutils.core import setup


class NodeModulesMissing(Exception):
    "raised when node_modules directory is not found"
    pass


if 'develop' in sys.argv or any(a.startswith('bdist') for a in sys.argv):
    import setuptools

# Ensure that js has been built. This does not guaruntee that the packages
# are update to date. In the future we might do a more expensive check
# involving file hashes, but only on sdist and bdist builds.
if not os.path.exists('node_modules'):
    raise NodeModulesMissing("Before Python package can be installed, "
                             "JavaScript components must be build using npm. "
                             "Run the following and then retry: "
                             "\nnpm install\nnpm run build")

setup_args = dict(
    name                 = '{{ cookiecutter.python_package_name }}',
    packages             = ['{{ cookiecutter.python_package_name }}'],
    author               = '{{ cookiecutter.author_name }}',
    author_email         = '{{ cookiecutter.author_email }}',
    include_package_data = True
)

if __name__ == '__main__':
    setup(**setup_args)
