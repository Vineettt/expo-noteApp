import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NotesProvider } from "./src/context/NotesContext";
import ListNoteScreen from "./src/screens/ListNotesScreen";
import CreateNoteScreen from "./src/screens/CreateNotesScreen";
import ShowNoteScreen from "./src/screens/ShowNoteScreen";
import EditNoteScreen from "./src/screens/EditNoteScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="notes"
          component={ListNoteScreen}
          options={{
            title: "All Notes",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="create"
          component={CreateNoteScreen}
          options={{
            title: "Create Note",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="show"
          component={ShowNoteScreen}
          options={{
            title: "Note",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="edit"
          component={EditNoteScreen}
          options={{
            title: "Update Note",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  );
};
