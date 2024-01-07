import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccordionItem from './AccordionItem';

export default SingleJoke = ({ apiData }) => {
    return (
        <>
            <View style={styles.container}>
                {apiData && apiData.jokes
                    ? (apiData.jokes.map((joke, index) => (<AccordionItem key={index} title={joke.setup} content={joke.delivery} />)))
                    : (<ActivityIndicator size="extra-large" color="#AB26ED" />

                    )}
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => { }}>
                <Text style={styles.buttonText}>See more Jokes</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        width: "90%",
        borderColor: '#ccc',
        borderRadius: 10,
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


// 1 - Fazer a tela antiga sumir e aparecer a nova
// 2 - Fazer todas as piadas aparecerem na nova tela
// 3 - Estilizar a nova tela