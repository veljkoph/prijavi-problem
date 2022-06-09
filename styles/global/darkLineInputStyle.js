import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const darkLineInputStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 25,
    position: "relative",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.greenDarkest,
    fontFamily: "Lato-Regular",
  },
  field: {
    height: 42,
    backgroundColor: "transparent",
    borderRadius: 7,
    borderBottomWidth: 2,
    borderColor: Colors.green2,
    width: "100%",
    color: Colors.darkGrey,
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop: 10,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  passwordToggle: {
    alignSelf: "flex-end",
    transform: [{ translateY: 30 }, { translateX: -10 }],
    zIndex: 1,
    elevation: 1,
    width: 25,
    color: "white",
    position: "absolute",
  },
  errors: {
    color: Colors.red,
    marginBottom: 20,
    textAlign: "left",
    marginTop: 10,
    fontFamily: "Lato-Bold",
  },
});
