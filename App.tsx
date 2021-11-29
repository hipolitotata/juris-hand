import React from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/pages/main';

import {Provider} from 'react-redux';
import {Store} from './src/store';

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}
