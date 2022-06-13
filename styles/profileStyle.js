import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const profileStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form: {
    width: "100%",
  },
  submitBtnText: {
    color: Colors.white,
    fontFamily: "Lato-Regular",
  },
  submitBtn: {
    backgroundColor: Colors.green2,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 25,
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  imageBtn: {
    position: "relative",
    borderRadius: 50,
  },
  editImageIcon: {
    marginBottom: 20,
    position: "absolute",
    bottom: -20,
    left: 128,
    color: Colors.greenDark,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderWidth: 4,
    borderColor: Colors.green2,
  },
});
