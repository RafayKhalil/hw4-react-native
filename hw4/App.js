import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Textinput from './components/textinput';
import Searchbutton from './components/search_button';

export default function App() {
  return (
    <View style={styles.container}>
      <Textinput></Textinput>
      <Searchbutton>Search</Searchbutton>
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
