//the imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//The main  component
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      My name is <Text style={styles.boldText}>Dennis Anim.</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

//the styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#236745',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold'
  }
});
