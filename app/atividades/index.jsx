import React from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercícios</Text>
            <View style={styles.linksContainer}>
                <Link href='/pokemon' style={styles.link}>
                    <Text style={styles.linkText}>Pokémon</Text>
                </Link>
                <Link href='/singup' style={styles.link}>
                    <Text style={styles.linkText}>Signup</Text>
                </Link>
                <Link href='/ifome' style={styles.link}>
                    <Text style={styles.linkText}>Ifome</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4F8', // Light background color
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50', // Darker color for the title
        marginBottom: 20,
    },
    linksContainer: {
        width: '100%',
        alignItems: 'center',
    },
    link: {
        marginVertical: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#3498DB', // Button color
        width: '80%', // Decreased width of buttons
        alignItems: 'center',
    },
    linkText: {
        fontSize: 14,
        color: '#FFFFFF', // White text color for contrast
    },
});

export default Home;
