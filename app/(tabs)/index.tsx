import React, { useContext, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  StyleSheet, View, Text, Pressable, StatusBar, TextInput, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeContext } from '@/context/themeContext';
const index = () => {

const context = useContext(ThemeContext)

  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputAnim = useRef(new Animated.Value(500)).current;
  if (!context) {
  throw new Error("ThemeContext must be used within a ThemeProvider")
  }
  
  const { theme, colorScheme } = context;

  const styles = createStyles(theme, colorScheme)

  const openSearch = () => {
    setIsSearchOpen(true),
      Animated.timing(inputAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(); 
  } 

const closeSearch = () => {
      Animated.timing(inputAnim, {
        toValue: 500,
        duration: 300,
        useNativeDriver: false,
      }).start(() => { setIsSearchOpen(false) }); 
  } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barContainer}>
        {!isSearchOpen && <View style={styles.bar}>
          <View style={styles.barLeft}>
            <Pressable style={styles.profile}>
              <Ionicons name="person" size={24} color="white"  />
            </Pressable>
            <Text style={styles.title}>Shmignal</Text>
          </View>
          <View style={styles.barRight}>
            <Pressable>
              <AntDesign name="search1" size={24} color="white" style={{marginRight: 20}} onPress={openSearch} />
            </Pressable>
            <Pressable>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </Pressable>
          </View>
        </View>}
        {isSearchOpen && <Animated.View style={[styles.inputContainer, {transform: [{translateX: inputAnim}]}]}>
          <TextInput style={styles.input} value={searchValue} onChangeText={setSearchValue} />
          <Pressable style={styles.leftArrow} onPress={closeSearch}>
            <AntDesign name="arrowleft" size={30} color={theme.text} />
          </Pressable>
        </Animated.View>}
      </View>
            <StatusBar barStyle={theme.text} backgroundColor={theme.background} />
    </SafeAreaView>
  )
}

export default index


const createStyles = (theme, colorScheme) => {
  
 return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      minHeight: '110%',
   },
   barContainer: {
     position: "relative",
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
   },
   inputContainer: {
     position: "absolute",
     flexDirection: "row",
     alignItems: "center",
     right: 0,
     left: 0,
    },
   input: {
     flex: 1,
     height: 50,
     paddingLeft: 40,
     backgroundColor: colorScheme === "dark" ? "white" : "black",
     borderRadius: 25,
   },
   leftArrow: {
     position: "absolute",
     left: 10,
     backgroundColor: "black",
     borderRadius: 17,
     padding: 2
   },

  })
}