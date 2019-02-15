/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import MainApp from './src/MainApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainApp);

// import React from 'react';
// import MainApp from './src/MainApp';
// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent('FontIcons', () => MainApp);