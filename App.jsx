import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Header />


      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EEFF',
  },
});
