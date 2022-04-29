import {PluginManager} from 'live-plugin-manager';
const manager = new PluginManager();

const test = await manager.queryPackageFromGithub('dnhook123/modules#25c265c');
