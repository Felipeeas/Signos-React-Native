import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json';

export default class DetalheSigno extends React.Component {

  constructor () {
    super()
    this.state = {
      signo: undefined
    }
  }
 
  componentDidMount () {
    const idSigno = parseInt(this.props.match.params.idSigno, 10)
 
    this.setState({
      signo: signos
        .filter((signo, key) => idSigno === key)
        .shift()
    })
  }


  render() {
      const { signo } = this.state 

      if (!signo) {
        return (
          <View />
        )
      }

    return (
      <View style={styles.container}>
        <Text style={styles.title} >{signo.nome}</Text>
        <Text style={styles.text}>{signo.caracteristica}</Text>
        <Text style={styles.date}>{signo.periodo.join(' até ')}</Text>
        <Button title='Voltar' onPress={() => this.props.history.push('/')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  text:{
    fontSize:20,
    marginBottom: 10
  },
  date:{
    fontSize:25
   
  }
});
