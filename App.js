import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp'
import store from './src/store'
import { Provider } from 'react-redux'

if (typeof global.self === "undefined") global.self = global; // react-native는 원격에서 self 접근할 수 없어, global에 설정해 준다.

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});