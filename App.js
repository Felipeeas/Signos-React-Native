import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListaSignos from './ListaSignos'
import DetalhesSigno from './DetalheSigno'
import { NativeRouter as Router, Switch, Route} from 'react-router-native'


export default class App extends React.Component {

 

  render() {

    return (
      <Router>
        <View style={styles.container}>
          <Switch>
              <Route path='/:idSigno' component={DetalhesSigno} />
              <Route component={ListaSignos} />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
