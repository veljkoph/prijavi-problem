import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const textAreaStyle = StyleSheet.create({
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
    textAlign: "right",
    width: "100%",
  },

  field: {
    minHeight: 110,
    backgroundColor: Colors.lightGrey3,
    borderRadius: 7,
    width: "100%",
    color: Colors.darkBlue,
    fontSize: 15,
    fontFamily: "Roboto-Light",
    paddingHorizontal: 10,
    paddingTop: 10,
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
    fontFamily: "Roboto-Bold",
  },
});
