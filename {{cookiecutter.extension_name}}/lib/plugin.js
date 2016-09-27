module.exports = [{
    id: '{{ cookiecutter.extension_name }}',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension {{ cookiecutter.extension_name }} is activated!');
      console.log(app.commands);
    }
}];
