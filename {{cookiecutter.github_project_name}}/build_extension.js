var buildExtension = require('jupyterlab-extension-builder').buildExtension;

buildExtension({
        name: '{{ cookiecutter.extension_name }}',
        entry: './lib/plugin.js',
        outputDir: './{{ cookiecutter.python_package_name }}/static'
});
