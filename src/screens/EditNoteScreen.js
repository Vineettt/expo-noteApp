import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NotesContext } from "../context/NotesContext";

const EditNotesScreen = ({ navigation, route }) => {
  const { state, dispatch } = useContext(NotesContext);
  const { id } = route.params;
  const particularNote = state.find((record) => {
    return record.id === id;
  });
  const [title, setTitle] = useState(particularNote.title);
  const [content, setContent] = useState(particularNote.content);
  return (
    <View style={{ flex: 1, margin: 6 }}>
      <Text style={{ fontSize: 22 }}> Update Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={style.input}
      />
      <Text style={{ fontSize: 22 }}> Update Content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={style.input}
        numberOfLines={3}
        multiline={true}
      />
      <TouchableOpacity
        style={{
          marginTop: 15,
          backgroundColor: "blue",
          padding: 12,
          marginHorizontal: 30,
          borderRadius: 10,
        }}
        onPress={() => {
          dispatch({ type: "UPDATE", payload: { id, title, content } });
          navigation.navigate("notes");
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: "white",
            textAlign: "center",
          }}
        >
          Update Note
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default EditNotesScreen;
