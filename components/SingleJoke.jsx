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
