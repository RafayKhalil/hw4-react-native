import React,{useState} from 'react';
import { Button } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';


const Searchbutton = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const handlePress = () => {
      setIsLoading(true);
  
      // Call an async function or perform some other operation that takes time
      // ...
      // Once the operation is complete, set isLoading to false
      
      setIsLoading(false);
    };

    return (
  <Button icon="magnify" mode="contained" onPress={handlePress} disabled={isLoading} loading={isLoading}>
   {isLoading ? <ActivityIndicator /> : 'Search'}
  </Button>
);
    };

export default Searchbutton;