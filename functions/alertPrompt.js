import { Alert } from "react-native";

export const alertPrompt = (fun) =>
  Alert.alert("Odjava", "Da li ste sigurni?", [
    {
      text: "Ne",
      style: "cancel",
    },
    { text: "Da", onPress: () => fun() },
  ]);
