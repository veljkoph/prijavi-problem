import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const profileStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: "flex-start",
    width: "100%",
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    flex: 1,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: Colors.blueish,
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  iconCorner: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 20,
    width: 20,
  },
  form: {
    width: "100%",
  },
  submitBtnText: {
    color: "#FFF",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
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
    color: Colors.darkBlue,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    borderWidth: 4,
    borderColor: Colors.green,
  },
});
