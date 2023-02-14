import { useState, useEffect } from "react";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';

const MyFunction = () => {

    const [users, setUsers] = useState([]);
    const UserCollectionReference = collection(db, "device1");

    useEffect(() => {
        const getUsers = async() => {
            const data =  await getDocs(UserCollectionReference);
            console.log(data);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers()
    }, [])
    return (
        <View>
            {users.map((user) => {
                console.log(user.id);
                return(
                        // <Text key={user.id}>{user.name} {user.rating}.0 ${user.price}</Text>
                    <View  key={user.id} style={{ marginTop: 10, padding: 25, backgroundColor: "#eee" }}>
                        <EitemsImage image = {user.uri} />
                        <EitemsInfo name = {user.name} rate = {user.rating} price = {user.price} />
                    </View>
                );
            })}
        </View>
    );
};


const EitemsImage = (props) => (
  <TouchableOpacity>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
    </TouchableOpacity>
  );
  
  const EitemsInfo = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
          {/* $ 6000 */}
          $ {props.price}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          hight: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>{props.rate}</Text>
      </View>
    </View>
  );
  
  export default MyFunction;