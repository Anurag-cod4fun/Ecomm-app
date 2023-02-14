
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const ImageSlider = () => {
    const images = [
        { uri: 'https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759_960_720.jpg' },
        { uri: 'https://assets.thehansindia.com/h-upload/2022/04/30/1600x960_1289668-mobiles-11.jpg' },
        { uri: 'https://www.aisleofshame.com/wp-content/uploads/2022/08/walmart-cloths.jpg' },
        { uri: 'https://chaosbakery.com/wp-content/uploads/2020/12/retro-2095749_1280.jpg' },
        { uri: 'https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759_960_720.jpg' },
        { uri: 'https://assets.thehansindia.com/h-upload/2022/04/30/1600x960_1289668-mobiles-11.jpg' },
        { uri: 'https://www.aisleofshame.com/wp-content/uploads/2022/08/walmart-cloths.jpg' },
        { uri: 'https://chaosbakery.com/wp-content/uploads/2020/12/retro-2095749_1280.jpg' },
        { uri: 'https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759_960_720.jpg' },
        { uri: 'https://assets.thehansindia.com/h-upload/2022/04/30/1600x960_1289668-mobiles-11.jpg' },
        { uri: 'https://www.aisleofshame.com/wp-content/uploads/2022/08/walmart-cloths.jpg' },
        { uri: 'https://chaosbakery.com/wp-content/uploads/2020/12/retro-2095749_1280.jpg' },
        
      ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[currentImageIndex].uri }}
      />
      <TouchableWithoutFeedback onPress={() => setCurrentImageIndex(currentImageIndex + 1)}>
        <View style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 400,
    borderRadius: 10,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageSlider;
