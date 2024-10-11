import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CustomButton({ onPress, title, color }: { onPress: () => void, title: string, color: string }) {
    return (
        <View style={[styles.button, { backgroundColor: color }]}>
            <Button title={title} onPress={onPress} color='white' />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});