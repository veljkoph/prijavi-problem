import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const profileInfoStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 25,
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  gradient: {
    position: "absolute",
    flex: 1,
    flexGrow: 1,
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  paddingText: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 23,
    fontFamily: "Lato-Bold",
    color: Colors.greenDarkest,
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato-Bold",
    color: Colors.greenDarkest,
    marginVertical: 17,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Lato-LightItalic",
    color: Colors.green2,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    borderColor: Colors.lightGrey,
    // borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
