import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';



export default function App() {

  const [number, setNumber] = useState('');
  const [guess, setGuess] = useState('');
  const [randomCorrect, setRandomCorrect] = useState(Math.floor(Math.random() * 100) + 1);
  const [guesses, setGuesses] = useState(0);

  function testGuess ()  {

    const totalGuesses = guesses + 1;
    setGuesses(totalGuesses);

    if (number == randomCorrect) {
      Alert.alert("You guessed the correct number! It took " + totalGuesses + " guesses")
    } else if (number > randomCorrect) {
      setGuess('Your guess: ' + number + ' is too high');
    } else if (number < randomCorrect){
      setGuess('Your guess: ' + number + ' is too low');
    } else {
      setGuess('Something went wrong')
    }
  }

  return (

    <View style={styles.container}>
      <Text>Guess number between 1-100</Text>
      <TextInput keyboardType="numeric" style={styles.input} onChangeText={number => setNumber(number)} value={number} placeholder="Type your guess here"/>
      <Text>{guess}</Text>
      <View style={{ flexDirection: "row" }}>
      <Button title="Make a guess" onPress={testGuess}
      />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
