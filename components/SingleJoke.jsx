import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SingleJoke({ apiData, onPressApi }) {
    useEffect(() => {
        onPressApi;
    }, []);

    return (
        <View style={styles.container}>
            <Text>Single Joke</Text>
            {apiData && (
                <>
                    <Text>{apiData.setup}</Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

// 1 - Fazer a tela antiga sumir e aparecer a nova
// 2 - Fazer todas as piadas aparecerem na nova tela
// 3 - Estilizar a nova tela