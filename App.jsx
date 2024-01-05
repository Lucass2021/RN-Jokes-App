import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import JokeConfigurator from './components/JokeConfigurator';
import SingleJoke from './components/SingleJoke';
import { useEffect, useState } from 'react';

export default function App() {
  const [apiData, setApiData] = useState(null)
  const [jokeCategoryParent, setJokeCategoryParent] = useState("")

  const handleJokeApiRequest = async () => {
    try {
      const req = await fetch(`https://v2.jokeapi.dev/joke/${jokeCategoryParent}`);
      const json = await req.json();
      setApiData(json);
      console.log("-Running API");
      console.log("API Response:", json);
      console.log("Joke Response:", json.setup);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleConfiguratorValueChange = (value) => {
    setJokeCategoryParent(value);
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Header />

      <View style={styles.components}>
        <JokeConfigurator onPressApi={handleJokeApiRequest} exportJokeCategory={handleConfiguratorValueChange} />
        <SingleJoke apiData={apiData} onPressApi={handleJokeApiRequest} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EEFF',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  components: {
    flex: 1,
    justifyContent: 'center',
  },
});
