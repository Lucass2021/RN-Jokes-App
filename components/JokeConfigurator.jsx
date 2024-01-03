import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function JokeConfigurator() {
    const jokeCategories = ["Any", "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"]
    const [jokeCategory, setJokeCategory] = useState("")

    return (
        <View style={styles.container}>

            <View style={styles.jokeCategoryContainer}>
                {/* <Text style={styles.jokeCategoryText}>Choose Joke Category</Text> */}
                <SelectDropdown
                    buttonStyle={styles.jokeCategorySelectDropdown}
                    buttonTextStyle={{ color: "#fff" }}
                    defaultButtonText="Select Joke Category"
                    data={jokeCategories}
                    onSelect={(selectedItem, index) => {
                        setJokeCategory(selectedItem)
                        console.log(selectedItem, index)
                    }}
                />
            </View>

            <View style={styles.jokeAmountContainer}>
                <Text style={styles.jokeAmountText}>How many jokes do you want to laugh at?</Text>
                <TextInput
                    style={styles.jokeAmountInput}
                    placeholder="Search for a joke from 1 to 1300"
                    keyboardType="numeric"
                    placeholderTextColor="#301534"
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Show Jokes" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    jokeCategoryContainer: {
        marginBottom: 50
    },
    // jokeCategoryText: {
    //     fontSize: 18,
    //     fontWeight: "bold",
    //     color: "#301534",
    //     textAlign: "center",
    //     marginBottom: 10
    // },
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
        fontSize: 18,
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
    buttonContainer: {

    },
});

