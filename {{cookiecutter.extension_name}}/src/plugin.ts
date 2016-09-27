import {
  JupyterLabPlugin
} from 'jupyterlab/lib/application';

/**
 * Initialization data for the {{ cookiecutter.extension_name }} extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: '{{ cookiecutter.extension_name }}',
  autoStart: true,
  activate: (app) => {
    console.log('JupyterLab extension {{ cookiecutter.extension_name }} is activated!');
  }
};

export default extension;
