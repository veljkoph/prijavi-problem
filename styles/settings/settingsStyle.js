import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const settingsStyle = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fefefe",
  },
  item: {
    padding: 15,
    backgroundColor: Colors.greenLight,
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
});
