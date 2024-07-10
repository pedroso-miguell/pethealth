import { Stack } from 'expo-router';

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen name="inicial" options={{ headerShadowVisible: false, headerShown: false}} />
            <Stack.Screen name="login" options={{ headerShadowVisible: false, headerShown: false }} />
            <Stack.Screen name="cadastro" options={{ headerShadowVisible: false, headerShown: false }} />
        </Stack>
    );
}
