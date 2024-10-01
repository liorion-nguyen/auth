import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
              <TextInput placeholder='Username' style={styles.input} />
              <TextInput placeholder='Email' style={styles.input} />
              <TextInput placeholder='Password' style={styles.input} />
              <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Register</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    gap: 40
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold'
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 15,
    margin: 6
  },
  button: {
    backgroundColor: '#0766ff',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
});
