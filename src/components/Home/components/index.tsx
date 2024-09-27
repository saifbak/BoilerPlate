import { Pressable, Text, View } from 'react-native';
import React from 'react';
import styles from '../styles';
import useHome from '../hooks/useHome';

const Home = () => {
    const { name, initialName, handleChangeName } = useHome();
    return (
        <View style={styles.container}>
            <Text>Welcome Home: {name} - {initialName.current} </Text>
            <Pressable onPress={() => handleChangeName('Owais')} ><Text>Press Me</Text></Pressable>
        </View>
    );
};

export default Home;
