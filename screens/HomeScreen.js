import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import Navbar from '../components/nav-bar';
import ImgSlider from '../components/image-slider';
import {getAuth} from "firebase/auth";
import Learn from './getItems';

const auth = getAuth(); 

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
      auth.signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ScrollView behavior="padding">
      <Navbar onHitme = {handleSignOut} />
      {/* <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
      <View style={styles.ImageSS}>
        <ImgSlider />
      </View>
      <View>
      <Learn />
      </View>
    </ScrollView>
  );
};


export default HomeScreen;


const styles = StyleSheet.create ({
  ImageSS : {

  }
});

