//Hangman imports
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Views/Home'
import StartGame from './Views/StartGame'
import JoinGame from './Views/JoinGame'
import Scoreboard from './Views/Scoreboard'

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  StartGame: { screen: StartGame },
  JoinGame: { screen: JoinGame },
  Scoreboard: { screen: Scoreboard }
});

const Hangman = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Hangman />
    );
  }
}

// const styles = create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
