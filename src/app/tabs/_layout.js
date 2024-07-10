import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#593C9D',
                tabBarInactiveTintColor: '#593C9D99',
                tabBarStyle: { backgroundColor: 'white', height: 60 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconSize = focused ? size * 1.2 : size;
                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={iconName} color={color} size={iconSize} />;
                    } else if (route.name === 'perfil') {
                        iconName = focused ? 'person' : 'person-outline';
                        return <Ionicons name={iconName} color={color} size={iconSize} />;
                    }
                },
                tabBarIconStyle: { marginBottom: -10 },
            })}
        >
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: 'Home'
                }} 
            />
            <Tabs.Screen 
                name="perfil" 
                options={{ 
                    title: 'Perfil'
                }} 
            />
        </Tabs>
    );
}
