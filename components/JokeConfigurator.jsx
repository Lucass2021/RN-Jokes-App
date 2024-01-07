import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function JokeConfigurator({ onPressApi, onPressShowJokes, exportJokeCategory, exportJokeAmount, jokeCategoryError, jokeAmountError }) {
    const jokeCategories = ["Any", "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"]
    const [jokeCategory, setJokeCategory] = useState("")
    const [jokeAmount, setJokeAmount] = useState("")

    const handleCategoryChange = (selectedItem, index) => {
        setJokeCategory(selectedItem);
        console.log(selectedItem, index)

        exportJokeCategory(selectedItem); // returning data to the App.jsx
    };

    const handleJokeAmountChange = (inputAmount) => {
        setJokeAmount(inputAmount)
        exportJokeAmount(inputAmount)
    }

    return (
        <View style={styles.container}>

            <View style={styles.jokeCategoryContainer}>
                <SelectDropdown
                    buttonStyle={styles.jokeCategorySelectDropdown}
                    buttonTextStyle={{ color: "#fff" }}
                    defaultButtonText="Select Joke Category"
                    data={jokeCategories}
                    onSelect={handleCategoryChange}
                />
                {!jokeCategory && jokeCategoryError == true &&
                    <Text>Select an option</Text>
                }

            </View>

            <Text>Jokecategory Debug: {jokeCategory}</Text>

            <View style={styles.jokeAmountContainer}>
                <Text style={styles.jokeAmountText}>How many jokes do you want to laugh at?</Text>
                <TextInput
                    style={styles.jokeAmountInput}
                    placeholder="Type a number from 1 to 10"
                    keyboardType="numeric"
                    placeholderTextColor="#301534"
                    value={jokeAmount}
                    onChangeText={(text) => handleJokeAmountChange(text)}
                />
                {!(jokeAmount <= 0 || jokeAmount < 10) && jokeAmountError == true &&
                    <Text>Select a number between 1 to 10</Text>
                }
            </View>

            <Text>Amount Debug: {jokeAmount}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => { onPressApi(); onPressShowJokes(); }}>
                    <Text style={styles.buttonText}>Show Jokes</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    jokeCategoryContainer: {
        marginBottom: 50
    },
    jokeCategorySelectDropdown: {
        width: "90%",
        backgroundColor: '#AB26ED',
        borderColor: '#ccc',
        borderRadius: 5,
        alignSelf: 'center'
    },
    jokeAmountContainer: {
        marginBottom: 50
    },
    jokeAmountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#301534",
        textAlign: "center",
        alignSelf: 'center',
        maxWidth: 350,
        marginBottom: 0
    },
    jokeAmountInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        padding: 10,
        width: "90%",
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#AB26ED',
        borderRadius: 5,
        padding: 10,
        width: "90%",
        borderColor: '#ccc',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
});

