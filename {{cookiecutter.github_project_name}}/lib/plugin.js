module.exports = [{
    id: '{{ cookiecutter.extension_name }}',
    activate: function(app) {
       console.log(app.commands);
    }
}];
