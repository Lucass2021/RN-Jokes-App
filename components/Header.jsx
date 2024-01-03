import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <Text style={styles.headerTitle}>Jokes App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 65,
    },
    headerTitle: {
        marginTop: 10,
        fontSize: 30,
        color: "#301534",
        fontWeight: "bold",
    }
});
