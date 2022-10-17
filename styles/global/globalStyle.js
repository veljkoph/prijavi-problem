import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";
import { Colors } from "../../constants/Colors";

export const globalStyle = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  shadow1: {
    elevation: 2,
    shadowColor: Colors.greenDarkest,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  rowSpaceBtw: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  rowSpaceAround: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  column: {
    flexDirection: "column",
  },
  whiteText: {
    color: Colors.white,
    fontSize: 14,
  },
  gradientLine: {
    height: 3,
    width: "100%",
    borderTopEndRadius: 20,
    marginBottom: 5,
  },
  borderFocusedMenu: {
    borderTopWidth: 2,
    borderColor: Colors.green2,
    height: "100%",
    paddingTop: 12,
    width: "90%",
    alignItems: "center",
  },
  paddingFocused: {
    paddingTop: 8,
  },
  paddingNotFocused: {
    padding: 10,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },

  cancelBtn: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    minHeight: 60,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  ctaBtn: {
    backgroundColor: Colors.green,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    minHeight: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  cancelBtnText: {
    fontFamily: "Roboto-Medium",
    color: Colors.grey,
    fontSize: 15,
  },
  ctaBtnText: {
    fontFamily: "Roboto-Medium",
    color: "#fff",
    fontSize: 15,
  },
  successText: {
    fontFamily: "Roboto-Medium",
    color: Colors.darkBlue,
    fontSize: 15,
    textAlign: "center",
  },
  errorText: {
    fontFamily: "Roboto-Medium",
    color: Colors.red,
    fontSize: 15,
    textAlign: "center",
  },

  headerTitle: {
    fontSize: 22,
    marginBottom: 4,
    fontFamily: "Roboto-Medium",
    color: Colors.darkBlue,
  },
  headerBtn: {
    flexDirection: "row",
    marginVertical: 5,
  },
  headerArrow: {
    marginRight: 10,
  },
  headerSubTitle: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "Roboto-Regular",
    color: Colors.grey,
    lineHeight: 20,
  },
  headerSeparator: {
    height: 3,
    width: "11%",
    borderRadius: 20,
    backgroundColor: Colors.green,
    marginBottom: 15,
  },
  whiteBg: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  safeArea: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
