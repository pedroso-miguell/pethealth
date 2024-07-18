import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de importar corretamente seus ícones

const animais = [
    {
        id: 1,
        nome: 'Rex',
        especie: 'Cachorro',
        raca: 'Pug',
        idade: '2 anos',
        descricao: 'Um cachorro muito brincalhão e amigável. Adora crianças.',
        porte: 'Médio',
        sexo: 'Masculino',
        vacinado: true,
        vermifugado: true,
        imagem: require('../imgs/pug.jpg'), // exemplo de imagem local
    },
    {
        id: 2,
        nome: 'Mia',
        especie: 'Gato',
        raca: 'Siamês',
        idade: '1 ano',
        descricao: 'Uma gatinha tranquila e carinhosa. Gosta de colo.',
        porte: 'Pequeno',
        sexo: 'Feminino',
        vacinado: true,
        vermifugado: true,
        imagem: require('../imgs/siames.jpg'), // exemplo de imagem local
    },
    // Adicione mais animais conforme necessário
];

export default function AdoteScreen() {
    const [currentAnimalIndex, setCurrentAnimalIndex] = useState(0);

    const handleLike = () => {
        // Lógica para "like" (deslizar para a direita)
        // Avançar para o próximo animal
        nextAnimal();
    };

    const handleDislike = () => {
        // Lógica para "não escolho" (deslizar para a esquerda)
        // Avançar para o próximo animal
        nextAnimal();
    };

    const nextAnimal = () => {
        // Avançar para o próximo animal
        setCurrentAnimalIndex(currentAnimalIndex + 1);
    };

    const renderAnimalDetails = () => {
        const animal = animais[currentAnimalIndex];
        return (
            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}><Text style={styles.boldText}>Nome:</Text> {animal.nome}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Espécie:</Text> {animal.especie}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Raça:</Text> {animal.raca}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Idade:</Text> {animal.idade}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Descrição:</Text> {animal.descricao}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Porte:</Text> {animal.porte}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Sexo:</Text> {animal.sexo}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Vacinado:</Text> {animal.vacinado ? 'Sim' : 'Não'}</Text>
                <Text style={styles.detailText}><Text style={styles.boldText}>Vermifugado:</Text> {animal.vermifugado ? 'Sim' : 'Não'}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {animais.length > 0 && (
                <View style={styles.card}>
                    <Image source={animais[currentAnimalIndex].imagem} style={styles.image} />
                    <TouchableOpacity onPress={() => handleLike()} style={[styles.actionButton, styles.likeButton]}>
                        <Ionicons name="heart" size={32} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDislike()} style={[styles.actionButton, styles.dislikeButton]}>
                        <Ionicons name="close" size={32} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.expandButton}>
                        <Ionicons name="arrow-up" size={24} color="#593C9D" />
                    </TouchableOpacity>
                </View>
            )}
            {renderAnimalDetails()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '70%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },
    actionButton: {
        position: 'absolute',
        top: '80%',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    likeButton: {
        right: 40,
        backgroundColor: '#4CAF50',
    },
    dislikeButton: {
        left: 40,
        backgroundColor: '#F44336',
    },
    expandButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    detailsContainer: {
        width: '90%',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
