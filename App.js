import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@react-navigation/stack";
import "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddToDoScreen from "./src/screen/AddTodoScreen";
import ViewTodosScreen from "./src/screen/ViewTodosScreen";

const stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <stack.Navigator initialRouteName="ViewToDo">
          <stack.Screen
            name="AddTodo"
            component={AddToDoScreen}
            option={{ title: "Tambah To-Do" }}
          ></stack.Screen>
          <stack.Screen
            name="ViewTodo"
            component={ViewTodosScreen}
            option={{ title: "Daftar To-Do" }}
          ></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
