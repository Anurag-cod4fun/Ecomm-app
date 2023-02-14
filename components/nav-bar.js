import React from "react";
import {View , Text, Image, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {getAuth} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Navbar = (props) => {
    const navigation = useNavigation()

    const morePhotos = () => {
          navigation.replace("Photo")
    }

    return (
        <View>
            <View style={styles.navbarhead}>
                <Text style={styles.text}></Text>
            </View>
            <View style={styles.navbar}>
            <Image
                source={require('../assets/images/3dots.png')}
                style={styles.dots}
            />
                <Text style={styles.text}>  Mobile-Mart</Text>
            <View style={styles.icon}>


                <Pressable>
                    <Image
                        source={require('../assets/images/shopping.png')}
                        style={styles.shopping}
                    />
                </Pressable>
                <TouchableOpacity onPress={morePhotos}>
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.user}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.onHitme}
                    style={styles.button}
                     >
                    <Image 
                        source={require('../assets/images/logout.png')}
                        style={styles.button}
                    />

                {/* <Text style={styles.buttonText}>Sign out</Text> */}
                </TouchableOpacity>
            </View>

            </View>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    navbarhead: {
        height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccf2ff',

    },
    navbar: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      backgroundColor: '#2196F3',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    dots: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
      },
    icon: {
        flexDirection: 'row',
        marginLeft: 50
    },
    button: {
        width: 25,
        height: 25,
        marginLeft: 10
    },
    user: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginLeft: 10
      },
      shopping: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginRight: 10
      },
  });