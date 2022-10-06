import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const profileBtnStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 20,
  },
  btn: {
    maxWidth: 150,
  },
  textWrapper: {
    justifyContent: "center",
    flexDirection: "column",
    flexShrink: 1,
    marginLeft: "5%",
  },
  blueText: {
    color: Colors.darkBlue,
    fontFamily: "Roboto-Bold",
    fontSize: 15,
    textAlign: "left",
  },
  grayText: {
    color: Colors.grey,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    flex: 0.4,
    textAlign: "left",
  },
});
