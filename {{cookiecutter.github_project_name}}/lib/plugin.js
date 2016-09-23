module.exports = [{
    id: '{{ cookiecutter.extension_name }}',
    autoStart: true,
    activate: function(app) {
       console.log(app.commands);
    }
}];
