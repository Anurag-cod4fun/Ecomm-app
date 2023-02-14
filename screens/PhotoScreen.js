import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Photos = () => {
  const navigation = useNavigation()

  const goHome = () => {
          navigation.replace("Home")
    }
  return (
    <View style={styles.container}>
      <Text>This image is stored in Firebase Cloud Storeage !</Text>

      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/fir-auth-2e7c0.appspot.com/o/2023%20-%202024.jpg?alt=media&token=30c3986f-317b-4452-a07a-54c6c59c040c",
        }}
        style={{ width: "75%", height: 300 }}
      />
      <View style = {{marginTop: 10, width: 150}} >
      <Button title = "Back" onPress={goHome}/>
      </View>

    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
