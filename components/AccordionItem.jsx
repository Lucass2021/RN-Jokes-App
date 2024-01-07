import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default AccordionItem = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={styles.accordionItem}>
            {/* Question - Setup from api */}
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.accordionTitle}>{title}</Text>
            </TouchableOpacity>

            {/* Answer - Delivery from API */}
            {expanded &&
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.accordionContent}>{content}</Text>
                </TouchableOpacity>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    accordionItem: {
        marginBottom: 20,
    },
    accordionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#301534',
    },
    accordionContent: {
        marginTop: 5,
        fontSize: 14,
        color: '#000000',
    },
});
