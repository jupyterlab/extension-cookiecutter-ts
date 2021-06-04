import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';{% if cookiecutter.has_server_extension.lower().startswith('y') %}

import { requestAPI } from './handler';{% endif %}

/**
 * Initialization data for the {{ cookiecutter.labextension_name }} extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.labextension_name }}:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension {{ cookiecutter.labextension_name }} is activated!');{% if cookiecutter.has_server_extension.lower().startswith('y') %}

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The {{ cookiecutter.python_name }} server extension appears to be missing.\n${reason}`
        );
      });{% endif %}
  }
};

export default extension;
