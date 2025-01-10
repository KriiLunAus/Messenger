import React, {useContext} from 'react';
import {  StyleSheet, View, Text, Pressable, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeContext } from '@/context/themeContext';
const index = () => {

const context = useContext(ThemeContext)

  if (!context) {
  throw new Error("ThemeContext must be used within a ThemeProvider")
  }
  
  const { theme, colorScheme } = context;

  const styles = createStyles(theme, colorScheme)

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.barLeft}>
          <Pressable style={styles.profile}>
            <Ionicons name="person" size={24} color="white"  />
          </Pressable>
          <Text style={styles.title}>Shmignal</Text>
        </View>
        <View style={styles.barRight}>
          <Pressable>
            <AntDesign name="search1" size={24} color="white" style={{marginRight: 20}} />
          </Pressable>
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </Pressable>
        </View>
      </View>
            <StatusBar barStyle={theme.text} backgroundColor={theme.background} />
    </View>
  )
}

export default index


const createStyles = (theme, colorScheme) => {
  
 return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      minHeight: '110%',
    },
    bar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',

      padding: 10
    },
    barLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    barRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    profile: {
      borderRadius: 12,
      overflow: "hidden",
      backgroundColor: "red"
    },
    title: {
      color: "white",
      fontSize: 24,
      marginLeft: 20,
    }


  })
}