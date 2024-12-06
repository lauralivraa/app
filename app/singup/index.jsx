import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsenha from 'react-native-vector-icons/Ionicons';

export default function App() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleChange = (name, value) => {
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!userData.name || !userData.email || !userData.password) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.statusText);
            }

            const data = await response.json();
            setNotificationMessage("Cadastro realizado com sucesso!");
            setUserData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            setNotificationMessage("Houve um erro ao realizar o cadastro.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.label}>Cadastre-se</Text>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={userData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                    <Icon style={styles.iconUser} name='user' size={25} color="#F29C11" />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="E-mail"
                        value={userData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <Icon style={styles.iconMail} name='mail' size={25} color="#F29C11" />
                </View>
            </View>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={userData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry={isPasswordVisible}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Iconsenha style={styles.icon} name={isPasswordVisible ? 'eye' : 'eye-off'} color="#F29C11" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.signUpButton} onPress={handleSubmit}>
                    <Text style={styles.signUpText}>Cadastrar</Text>
                </Pressable>
                <Pressable style={styles.googleButton}>
                    <Text style={styles.googleText}>Continuar com Google</Text>
                </Pressable>
            </View>
            {notificationMessage ? <Text style={styles.notificationMessage}>{notificationMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8', 
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    icon: {
        color: '#F29C11',
        marginRight: 5,
    },
    iconUser: {
        color: '#F29C11',
        marginRight: 10,
    },
    iconMail: {
        color: '#F29C11',
        marginRight: 10,
    },
    headerContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 28,
        marginBottom: 15,
        color: '#2E2E2E',
        fontWeight: '600',
    },
    buttonContainer: {
        marginTop: 90,
        flexDirection: 'column',
    },
    inputWrapper: {
        width: '90%',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 12,
        width: 320,
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
        color: '#444',
    },
    signUpButton: {
        width: 320,
        height: 55,
        backgroundColor: '#0F4B6E',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    signUpText: {
        fontSize: 18,
        color: '#FFF',
    },
    googleButton: {
        width: 320,
        height: 55,
        backgroundColor: '#FF5733',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        elevation: 3,
    },
    googleText: {
        fontSize: 18,
        color: '#FFF',
    },
    notificationMessage: {
        fontSize: 16,
        color: '#D32F2F',
        marginTop: 15,
    },
});
