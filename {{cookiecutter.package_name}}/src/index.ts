import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';{% if cookiecutter.has_server_extension.lower().startswith('y') %}

import { requestAPI } from './{{ cookiecutter.extension_name }}';{% endif %}

/**
 * Initialization data for the {{ cookiecutter.extension_name }} extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.extension_name }}',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension {{ cookiecutter.extension_name }} is activated!');{% if cookiecutter.has_server_extension.lower().startswith('y') %}

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The {{ cookiecutter.extension_name }} server extension appears to be missing.\n${reason}`
        );
      });{% endif %}
  }
};

export default extension;
