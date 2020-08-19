import * as React from 'react';
import { View, Text } from 'react-native';
import { makeStyles } from '@blackbox-vision/react-native-paper-use-styles';

export default function App() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Result: 10</Text>
    </View>
  );
}

const useStyles = makeStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
