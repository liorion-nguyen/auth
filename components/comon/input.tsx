import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry }: { value: string, onChangeText: any, placeholder: string, secureTextEntry: boolean }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default CustomInput;