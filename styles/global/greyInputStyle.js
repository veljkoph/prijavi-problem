import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const greyInputStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 25,
    position: "relative",
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.grey,
    fontFamily: "Roboto-Regular",
    marginTop: 10,
  },

  field: {
    minHeight: 52,
    backgroundColor: "transparent",
    borderRadius: 7,
    borderBottomWidth: 2,
    borderColor: Colors.lightGrey4,
    width: "100%",
    color: Colors.darkBlue,
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  passwordToggle: {
    alignSelf: "flex-end",
    transform: [{ translateY: 25 }, { translateX: -10 }],
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
    fontFamily: "Roboto-Bold",
  },
});
