import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function Textinput() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Enter a city name"
      />
    );
  };

  const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 20,
    width: '80%',
  },
})

export default Textinput