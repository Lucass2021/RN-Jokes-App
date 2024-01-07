import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import JokeConfigurator from './components/JokeConfigurator';
import SingleJoke from './components/SingleJoke';
import { useState } from 'react';

export default function App() {
  const [apiData, setApiData] = useState(null)
  const [jokeCategoryParent, setJokeCategoryParent] = useState("")
  const [jokeAmountParent, setJokeAmountParent] = useState(0)
  const [showJokes, setShowJokes] = useState(true)
  const [jokeCategoryError, setJokeCategoryError] = useState(false)
  const [jokeAmountError, setJokeAmountError] = useState(false)

  // onPressApi
  const handleJokeApiRequest = async () => {
    try {
      if (jokeCategoryParent.length > 3 || jokeAmountParent > 0) {
        const req = await fetch(`https://v2.jokeapi.dev/joke/${jokeCategoryParent}?type=twopart&amount=${jokeAmountParent}`);
        const json = await req.json();
        setApiData(json);
        console.log("-Running API");
        console.log("API Response:", json);
        console.log("Joke Response:", json.setup);
      }
    } catch (error) {
      if (jokeCategoryError === true || jokeAmountError === true) {
        console.error("API Error:", error);
      }
    }
  };

  // onPressShowJokes
  const handleShowJokesButton = () => {

    setApiData("") // Clean previously api data
    setShowJokes(false) // Change screen

    // Generate error message
    if (jokeCategoryParent === '') {
      setJokeCategoryError(true)
      setApiData("") // Clean previously api data
      setShowJokes(true) // Prevent Screen change
    }

    // Generate error message
    if (jokeAmountParent <= 0 || jokeAmountParent > 10) {
      setJokeAmountError(true)
      setApiData("") // Clean previously api data
      setShowJokes(true) // Prevent Screen change
    }

    if (jokeCategoryParent !== '' && jokeAmountParent > 0 && jokeAmountParent <= 10) {
      setJokeCategoryError(false) // Reset error status
      setJokeAmountError(false) // Reset error status
    }
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
            jokeCategoryError={jokeCategoryError}
            jokeAmountError={jokeAmountError}
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
    marginTop: 20,
    flex: 1,
    // justifyContent: 'center',
  },
});
