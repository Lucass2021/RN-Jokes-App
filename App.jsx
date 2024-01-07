// 1 - Fazer a tela antiga sumir e aparecer a nova - ok
// 2 - Fazer todas as piadas aparecerem na nova tela - ok
// 2.5 - Fazer apenas 1 piada aprecer na tela ok
// 3 - Estilizar a nova tela ok
// 4 - Tratar erros
// 5 - Adicionar delay e fazer com que o botão resete a aplicação 

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import JokeConfigurator from './components/JokeConfigurator';
import SingleJoke from './components/SingleJoke';
import { useState } from 'react';

export default function App() {
  const [apiData, setApiData] = useState(null)
  const [jokeCategoryParent, setJokeCategoryParent] = useState("")
  const [jokeAmountParent, setJokeAmountParent] = useState("")
  const [showJokes, setShowJokes] = useState(true)

  // onPressApi
  const handleJokeApiRequest = async () => {
    try {
      const req = await fetch(`https://v2.jokeapi.dev/joke/${jokeCategoryParent}?type=twopart&amount=${jokeAmountParent}`);
      const json = await req.json();
      setApiData(json);
      console.log("-Running API");
      console.log("API Response:", json);
      console.log("Joke Response:", json.setup);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  // onPressShowJokes
  const handleShowJokesButton = () => {
    setShowJokes(false)
  }

  // exportJokeCategory
  const handleCategoryValueChange = (value) => {
    setJokeCategoryParent(value);
  };

  // exportJokeAmount
  const handleAmountValueChange = (value) => {
    setJokeAmountParent(value);
  };

  const handleResetForm = () => {
    setJokeCategoryParent(""); // Reset Joke category
    setJokeAmountParent(""); // Reset Joke amount
    setShowJokes(true) // Return to home
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Header />

      <View style={styles.components}>
        {showJokes &&
          <JokeConfigurator
            onPressApi={handleJokeApiRequest}
            onPressShowJokes={handleShowJokesButton}
            exportJokeCategory={handleCategoryValueChange}
            exportJokeAmount={handleAmountValueChange}
          />
        }

        {!showJokes &&
          <SingleJoke
            apiData={apiData}
            onPressApi={handleJokeApiRequest}
            onPressResetApp={handleResetForm}
          />
        }
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
