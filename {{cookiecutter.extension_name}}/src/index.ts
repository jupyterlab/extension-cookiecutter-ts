import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the {{ cookiecutter.extension_name }} extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.extension_name }}',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension {{ cookiecutter.extension_name }} is activated!');
  }
};

export default extension;
