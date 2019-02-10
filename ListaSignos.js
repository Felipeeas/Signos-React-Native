import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, text, ListItem, Text, Header, Content, Left } from "native-base";
import signos from './signo.json';


export default class ListaSignos extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  

  render() {

     
    return (
      this.state.fontLoaded ?(
        <Container >
          <Header />
            <Content>

            {signos.map((signo, key) => (
                        <Button  style={styles.button} full  key={key} title={signo.nome} onPress={() => this.props.history.push('/' + key)} ><Text>{signo.nome}</Text></Button>
                        
                    ))}

            
          </Content>
      </Container>
      
      ) :null
          
        
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    
  },

});
