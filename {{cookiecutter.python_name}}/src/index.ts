import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';{% if cookiecutter.has_settings.lower().startswith('y') %}

import { ISettingRegistry } from '@jupyterlab/settingregistry';{% endif %}{% if cookiecutter.has_server_extension.lower().startswith('y') %}

import { requestAPI } from './handler';{% endif %}

/**
 * Initialization data for the {{ cookiecutter.labextension_name }} extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.labextension_name }}:plugin',
  autoStart: true,{% if cookiecutter.has_settings.lower().startswith('y') %}
  optional: [ISettingRegistry],{% endif %}
  activate: (app: JupyterFrontEnd{% if cookiecutter.has_settings.lower().startswith('y') %}, settingRegistry: ISettingRegistry | null{% endif %}) => {
    console.log('JupyterLab extension {{ cookiecutter.labextension_name }} is activated!');{% if cookiecutter.has_settings.lower().startswith('y') %}

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('{{ cookiecutter.labextension_name }} settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for {{ cookiecutter.labextension_name }}.', reason);
        });
    }{% endif %}{% if cookiecutter.has_server_extension.lower().startswith('y') %}

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

export default plugin;
