module.exports = [{
    id: '{{ cookiecutter.extension_name }}',
    autoStart: true,
    activate: function(app) {
      console.log('{{ cookiecutter.extension_name }} extension is active.');
      console.log(app.commands);
    }
}];
