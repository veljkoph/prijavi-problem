import { Alert } from "react-native";

export const alertPrompt = (fun) =>
  Alert.alert("City UP", "Da li ste sigurni?", [
    {
      text: "Ne",
      style: "cancel",
    },
    { text: "Da", onPress: () => fun() },
  ]);
