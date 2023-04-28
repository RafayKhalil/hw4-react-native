import * as React from 'react';
import { Button } from 'react-native-paper';
import { Search } from 'react-native-paper';

const Searchbutton = () => (
  <Button icon="magnify" mode="contained" onPress={() => console.log('Pressed')}>
    Search
  </Button>
);

export default Searchbutton;