import React, { useLayoutEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { db } from '../../data/firebase'

export default function AddChatScreen(props: { navigation: any }) {
  const [input, setInput] = useState("");
  const { navigation } = props

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
      await db.collection('Groups').add({
          name: input,
      }).then(() => {
          navigation.goBack();
      }).catch((error: any) => alert(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter a name for the chat"
        onChangeText={text => setInput(text)}
        onSubmitEditing={createChat}
      />
      <TouchableOpacity
        onPress={createChat}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

