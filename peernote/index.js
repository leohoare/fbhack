import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import Shell from './src/shell';

const store = configureStore();

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <Shell />
    </Provider>
  );
};

AppRegistry.registerComponent('peernote', () => App);
