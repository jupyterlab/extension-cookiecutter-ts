import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';{% if cookiecutter.kind.lower() == 'theme' %}

import { IThemeManager } from '@jupyterlab/apputils';{% endif %}{% if cookiecutter.has_settings.lower().startswith('y') %}

import { ISettingRegistry } from '@jupyterlab/settingregistry';{% endif %}{% if cookiecutter.kind.lower() == 'server' %}

import { requestAPI } from './handler';{% endif %}

/**
 * Initialization data for the {{ cookiecutter.labextension_name }} extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.labextension_name }}:plugin',
  description: '{{ cookiecutter.project_short_description }}',
  autoStart: true,{% if cookiecutter.kind.lower() == 'theme' %}
  requires: [IThemeManager],{% endif %}{% if cookiecutter.has_settings.lower().startswith('y') %}
  optional: [ISettingRegistry],{% endif %}
  activate: (app: JupyterFrontEnd{% if cookiecutter.kind.lower() == 'theme' %}, manager: IThemeManager{% endif %}{% if cookiecutter.has_settings.lower().startswith('y') %}, settingRegistry: ISettingRegistry | null{% endif %}) => {
    console.log('JupyterLab extension {{ cookiecutter.labextension_name }} is activated!');{% if cookiecutter.kind.lower() == 'theme' %}
    const style = '{{ cookiecutter.labextension_name }}/index.css';

    manager.register({
      name: '{{ cookiecutter.labextension_name }}',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });{% endif %}{% if cookiecutter.has_settings.lower().startswith('y') %}

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('{{ cookiecutter.labextension_name }} settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for {{ cookiecutter.labextension_name }}.', reason);
        });
    }{% endif %}{% if cookiecutter.kind.lower() == 'server' %}

    requestAPI<any>('get-example')
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
