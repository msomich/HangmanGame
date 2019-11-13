import * as React from 'react';
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

export class Home extends React.Component {
  render() {
    var navigator = this.props.navigation;

    return (
      <View style={styles.wholePage}>
        <Text style={styles.header}>
          Welcome to The Hangman Game
        </Text>
        <Image style={styles.logo} source={require("../Images/Hangman/hm6.png")} />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={()=>navigator.navigate('StartGame')}>
            <Image source={require('../Images/startGame.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigator.navigate('JoinGame')}>
            <Image source={require('../Images/joinGame.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigator.navigate('Scoreboard')}>
            <Image source={require('../Images/scoreboard.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wholePage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: '10%'
  },
  logo: {
    alignItems: "center",
    justifyContent: 'center',
    height: 150,
    width: 150,
    resizeMode: "contain"
  },
  button: {
    padding: '5%'
  },
  buttons: {
    paddingTop: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;