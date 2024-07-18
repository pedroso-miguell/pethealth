import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Modal, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Calendario() {
    const [selectedDate, setSelectedDate] = useState('');
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [eventName, setEventName] = useState('');
    const today = new Date().toISOString().split('T')[0];

    const addEvent = () => {
        if (eventName.trim()) {
            const newEvent = { title: eventName, date: selectedDate };
            setEvents([...events, newEvent]);
            setEventName('');
            setModalVisible(false);
        } else {
            Alert.alert('Erro', 'O nome do evento não pode ser vazio.');
        }
    };

    const removeEvent = (eventTitle) => {
        setEvents(events.filter(event => event.title !== eventTitle));
    };

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        setModalVisible(true);
    };

    const renderEvent = ({ item }) => (
        <View style={styles.eventContainer}>
            <Text style={styles.eventText}>{item.title} - {item.date}</Text>
            <TouchableOpacity onPress={() => removeEvent(item.title)}>
                <Text style={styles.removeEventText}>Remover</Text>
            </TouchableOpacity>
        </View>
    );

    const customMarkedDates = {};
    customMarkedDates[today] = { textColor: '#593C9D', startingDay: true, endingDay: true, color: '#593C9D' };

    const renderOrangeDays = () => {
        let dates = {};
        for (let i = 1; i <= 31; i++) {
            const day = `${today.slice(0, 8)}${i < 10 ? '0' : ''}${i}`;
            if (day !== today) {
                dates[day] = { marked: true, dotColor: '#F49B42' };
            }
        }
        return dates;
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{ ...customMarkedDates, ...renderOrangeDays() }}
                theme={{
                    arrowColor: '#593C9D',
                    monthTextColor: '#593C9D',
                    textSectionTitleColor: '#593C9D',
                    selectedDayBackgroundColor: '#593C9D',
                    todayTextColor: '#593C9D',
                    textDayFontWeight: 'bold',
                }}
            />
            <FlatList
                data={events}
                keyExtractor={(item) => item.title + item.date}
                renderItem={renderEvent}
                contentContainerStyle={styles.eventList}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Adicionar Evento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Evento"
                        value={eventName}
                        onChangeText={setEventName}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Adicionar" onPress={addEvent} />
                        <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    eventText: {
        fontSize: 16,
    },
    removeEventText: {
        color: 'red',
    },
    eventList: {
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});
