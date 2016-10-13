var buildExtension = require('@jupyterlab/extension-builder').buildExtension;

buildExtension({
        name: '{{ cookiecutter.extension_name }}',
        entry: './lib/plugin.js',
        outputDir: './{{ cookiecutter.extension_name }}/static'
});
