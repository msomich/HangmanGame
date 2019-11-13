import * as React from 'react';
import {
  View,
  Text,
  Picker,
  StyleSheet
} from 'react-native';

export class StartGame extends React.Component {

  constructor(props) {
   super(props);

  //set default state
   this.state = {
      category: '',
      word: ''
   }

   this.categories = {
     "Select category": "default",
     "Fruits": "fruits",
     "Vegetables": "vegetables",
     "Animals": "animals",
     "US States": 'usStates'
   }

   this.words = {}

   this.fruits = {
     "Apple": "apple",
     "Orange": "orange",
     "Banana": "banana",
     "Grape": "grape",
     "Kiwi": 'kiwi'
   }
   this.vegetables = {
     "Carrot": "carrot",
     "Pepper": "pepper",
     "Pumpkin": "pumpkin",
     "Corn": "corn",
     "Pea": 'pea'
   }
   this.animals = {
     "Giraffe": "giraffe",
     "Otter": "otter",
     "Shark": "shark",
     "Lion": "lion",
     "Squid": 'squid'
   }
   this.usStates = {
     "Florida": "florida",
     "Texas": "texas",
     "Nevada": "nevada",
     "Hawaii": "hawaii",
     "Maine": 'maine'
   }
  }

  render() {
    var category = this.state.category;
    if (category == "default"){
      this.words = {};
    }
    else if (this.state.category == "fruits") {
      this.words = this.fruits;
    }
    else if (this.state.category == "vegetables") {
      this.words = this.vegetables;
    }
    else if (this.state.category == "animals") {
      this.words = this.animals;
    }
    else if (this.state.category == "usStates") {
      this.words = this.usStates;
    }
    
    return (
      <View>
        <Text>This is the StartGame screen</Text>

        <View style={styles.pickerView}>
          <Picker
            selectedValue={this.state.category}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({category: itemValue})
            }>
              {
                Object.keys(this.categories).map((key) =>
                  <Picker.Item label={key} value={this.categories[key]} />
                )
              }
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Picker
            selectedValue={this.state.word}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({word: itemValue})
            }>
              {
                Object.keys(this.words).map((key,) =>
                  <Picker.Item label={key} value={this.words[key]} />
                )
              }
          </Picker>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    height: 50, 
    width: 150
  },
  pickerView: {
    alignItems: "center",
    justifyContent: 'center',
    padding: "20%"
  }
});

export default StartGame