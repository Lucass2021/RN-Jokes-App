import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import JokeConfigurator from './components/JokeConfigurator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Header />
      <JokeConfigurator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EEFF',
  },
});
