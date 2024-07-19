import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import image1 from '../imgs/slider1.png';
import image2 from '../imgs/slider2.png';
import image3 from '../imgs/slider3.png';

export default function Home() {
    const router = useRouter();

    const handleAdoptionPress = () => {
        router.push('./adote'); 
    };

    const handleFavoritesPress = () => {
        router.push('../stacks/favoritos');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.favoritesButton} onPress={handleFavoritesPress}>
                    <AntDesign name="hearto" size={30} color="#fff" marginTop={35}/>
                </TouchableOpacity>
            </View>
            <Swiper
                style={styles.wrapper}
                showsPagination={false}
                autoplay={true}
                autoplayTimeout={3}
            >
                <View style={styles.slide}>
                    <Image source={image1} style={styles.image} />
                </View>
                <View style={styles.slide}>
                    <Image source={image2} style={styles.image} />
                    <TouchableOpacity style={styles.button} onPress={handleAdoptionPress}>
                        <Text style={styles.buttonText}>Adote Agora</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                    <Image source={image3} style={styles.image} />
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        width: '100%',
        height: 100,
        backgroundColor: '#593C9D',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    favoritesButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 500,
    },
    image: {
        width: '100%',
        height: '130%',
        resizeMode: 'cover',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#593C9D',
        padding: 5,
        borderRadius: 5,
        right: 220,
        top: 110,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
    },
});