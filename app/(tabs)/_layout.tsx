import { Tabs } from 'expo-router';
import React, {useContext} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '@/context/themeContext';



export default function TabLayout() {


  const context = useContext(ThemeContext)

  if (!context) {
  throw new Error("ThemeContext must be used within a ThemeProvider")
  }
  
  const { theme } = context;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme.background},
        tabBarLabelStyle: {color: theme.text}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color="white" />,
        }}
      /><Tabs.Screen
        name="adsd"
        options={{
          title: 'sasf',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
}
