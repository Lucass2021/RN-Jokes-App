import { ActivityIndicator, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

export default SingleJoke = ({ apiData, onPressResetApp }) => {
    const [timeJokeButton, setTimeJokeButton] = useState(false)

    setTimeout(() => {
        setTimeJokeButton(true)
    }, 5000);


    return (
        <>
            {/* <View style={styles.container}>
                {apiData && typeof apiData === 'object' && !apiData.amount ? (
                    <AccordionItem title={apiData.setup} content={apiData.delivery} />
                ) : apiData && apiData.jokes && Array.isArray(apiData.jokes) && apiData.jokes.length > 0 ? (
                    apiData.jokes.map((joke, index) => (
                        <AccordionItem key={index} title={joke.setup} content={joke.delivery} />
                    ))
                ) : (
                    <ActivityIndicator size="extra-large" color="#AB26ED" />
                )}
            </View> */}
            <View style={styles.container}>
                {apiData && typeof apiData === 'object' && !apiData.amount ? (
                    <AccordionItem title={apiData.setup} content={apiData.delivery} />
                ) : apiData && apiData.jokes && Array.isArray(apiData.jokes) && apiData.jokes.length > 0 ? (
                    <SectionList
                        sections={[
                            {
                                title: 'Jokes',
                                data: Object.values(apiData.jokes), // Converta o objeto para um array de valores
                            }
                        ]}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <AccordionItem title={item.setup} content={item.delivery} />
                        )}
                    />
                ) : (
                    <ActivityIndicator size="extra-large" color="#AB26ED" />
                )}
                {timeJokeButton &&
                    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => { onPressResetApp() }}>
                        <Text style={styles.buttonText}>See more Jokes</Text>
                    </TouchableOpacity>
                }
            </View>


        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: 'center',
        marginBottom: 50
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