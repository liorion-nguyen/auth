import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.word}>Reset Your Password</Text>
      <Text style={styles.words}>We will send an email to reset your password</Text>
      <TouchableOpacity style={styles.email}>
        <Text style={{fontSize:17, fontWeight:'bold'}}>Email</Text>
      </TouchableOpacity>
      <TextInput placeholder='Enter your email' style={styles.enter}/>
      <TouchableOpacity>
        <Text style={styles.emailmeword}>Email me</Text>
      </TouchableOpacity>
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
  word: {
    fontSize:25,
    fontWeight:'bold'
  },
  words: {
    marginTop:10,
    fontSize:13
  },
  email: {
    marginTop:30,
    marginRight:220,
    
  },
  enter:{
    margin:20,
    paddingHorizontal:80,
    paddingVertical:10,
    borderWidth:2,
    borderColor:'orange',
    borderRadius:14,

  },

  emailmeword:{
backgroundColor:'orange',
paddingHorizontal:105,
paddingVertical:10,
color:'white'

  
  }
});
