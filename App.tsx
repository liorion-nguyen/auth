import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import CustomInput from './components/comon/input';
import { useState } from 'react';
import CustomButton from './components/comon/button';

export default function App() {
  const [users, setUsers] = useState([
    {
      email: 'chung@gmail.com',
      username: 'chung',
      password: '123456',
    },
    {
      email: 'phuoc@gmail.com',
      username: 'phuoc',
      password: '123456',
    },
    {
      email: 'minh@gmail.com',
      username: 'minh',
      password: '1234567',
    }
  ]);
  const [email, setEmail] = useState('chung@gmail.com');
  const [username, setUsername] = useState('chung');
  const [password, setPassword] = useState('12345');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
  };
  const validationEmpty = (text: string) => {
    return text.length > 0;
  }
  const validationLength = (text: string, length: number) => {
    return text.length > length;
  }
  const validationEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Phải chứa text@text.text
    return emailRegex.test(email);
  }
  const handleLogin = () => {
    if (!validationEmpty(email) || !validationEmpty(username) || !validationEmpty(password)) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    if (!validationLength(username, 3) || !validationLength(password, 5)) {
      setErrorMessage('Username must be at least 3 characters and password must be at least 5 characters');
      return;
    }
    if (!validationEmail(email)) {
      setErrorMessage('Invalid email');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match');
      return;
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        Alert.alert('Success', 'Login successful');
        return;
      }
    }
    Alert.alert('Error', 'Username or password is incorrect');
  };
  return (
    <View style={styles.container}>
      <CustomInput value={email} onChangeText={handleEmailChange} placeholder="Email" secureTextEntry={false} />
      <CustomInput value={username} onChangeText={handleUsernameChange} placeholder="Username" secureTextEntry={false} />
      <CustomInput value={password} onChangeText={handlePasswordChange} placeholder="Password" secureTextEntry={true} />
      <CustomInput value={confirmPassword} onChangeText={handleConfirmPasswordChange} placeholder="Confirm Password" secureTextEntry={true} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <CustomButton title="Login" onPress={handleLogin} color="#3b71f3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  errorMessage: {
    color: 'red',
  }
});
