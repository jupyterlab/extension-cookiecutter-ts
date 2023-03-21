import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';{% if kind.lower() == 'theme' %}

import { IThemeManager } from '@jupyterlab/apputils';{% endif %}{% if has_settings %}

import { ISettingRegistry } from '@jupyterlab/settingregistry';{% endif %}{% if kind.lower() == 'server' %}

import { requestAPI } from './handler';{% endif %}

/**
 * Initialization data for the {{ labextension_name }} extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '{{ labextension_name }}:plugin',
  autoStart: true,{% if kind.lower() == 'theme' %}
  requires: [IThemeManager],{% endif %}{% if has_settings %}
  optional: [ISettingRegistry],{% endif %}
  activate: (app: JupyterFrontEnd{% if kind.lower() == 'theme' %}, manager: IThemeManager{% endif %}{% if has_settings %}, settingRegistry: ISettingRegistry | null{% endif %}) => {
    console.log('JupyterLab extension {{ labextension_name }} is activated!');{% if kind.lower() == 'theme' %}
    const style = '{{ labextension_name }}/index.css';

    manager.register({
      name: '{{ labextension_name }}',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });{% endif %}{% if has_settings %}

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('{{ labextension_name }} settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for {{ labextension_name }}.', reason);
        });
    }{% endif %}{% if kind.lower() == 'server' %}

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The {{ python_name }} server extension appears to be missing.\n${reason}`
        );
      });{% endif %}
  }
};

export default plugin;
