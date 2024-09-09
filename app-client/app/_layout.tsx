import { Stack } from "expo-router"; // Import Stack from expo-router
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Bebas: require('../assets/fonts/Bebas.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right", 
      }}
    >
      
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home_page" options={{ headerShown: false, }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />

    </Stack>
  );
}
