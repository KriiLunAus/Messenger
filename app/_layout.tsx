import { Stack } from 'expo-router';
import { ThemeProvider } from '@/context/themeContext';


export default function RootLayout() {

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
