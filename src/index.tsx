import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { ItemList } from './components/ItemList';

export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <ItemList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
