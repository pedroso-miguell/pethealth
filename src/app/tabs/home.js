import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';

import image1 from '../imgs/slider1.png';
import image2 from '../imgs/slider2.png';
import image3 from '../imgs/slider3.png';

export default function Home() {
    const router = useRouter();

    const handleAdoptionPress = () => {
        router.push('./adote'); 
    };

    return (
        <View style={styles.container}>
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
        height: '80%',
        resizeMode: 'cover',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#593C9D',
        padding: 5,
        borderRadius: 5,
        right: 220,
        top: 170,
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
