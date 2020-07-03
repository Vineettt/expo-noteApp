import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NotesContext } from "../context/NotesContext";
import { Feather } from "@expo/vector-icons";

const ShowNoteScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { state } = useContext(NotesContext);
  const note = state.find((record) => {
    return record.id === id;
  });
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "blue",
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("edit", { id })}
        >
          <Feather size={30} color="white" name="edit" />
        </TouchableOpacity>
      </View>
      <Text style={style.myText}>{note.title}</Text>
      <Text style={style.myText}>{note.content}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  myText: {
    fontSize: 22,
    textAlign: "center",
  },
});

export default ShowNoteScreen;
