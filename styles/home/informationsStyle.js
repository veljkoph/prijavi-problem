import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const informationsStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 15,
    marginBottom: 4,
    fontFamily: "Lato-Regular",
  },
  gradientLine: {
    height: 4,
    width: "100%",
    borderTopEndRadius: 20,
  },
});
