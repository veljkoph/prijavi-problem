import { Dimensions, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/Colors";

export const globalStyle = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow1: {
    elevation: 3,
    shadowColor: Colors.greenDarkest,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  whiteText: {
    color: Colors.white,
    fontSize: 14,
  },
});
