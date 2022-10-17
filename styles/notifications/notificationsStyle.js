import { Platform, StatusBar, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const notificationsStyle = StyleSheet.create({
  message: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: Colors.darkBlue,
  },
  date: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.grey,
    marginBottom: 10,
  },
  lightText: {
    fontFamily: "Roboto-Light",
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 10,
  },
  unReadDot: {
    backgroundColor: Colors.red,
    height: 10,
    width: 10,
    borderRadius: 50,
    position: "absolute",
    top: 15,
    right: 15,
  },
  header: {
    flexDirection: "row",
    height: 80 + (Platform.OS === "android" ? StatusBar.currentHeight : 0),
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.green,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
});
