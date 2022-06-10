import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const authStyle = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
    backgroundColor: Colors.white,
  },
  form: {
    alignSelf: "flex-start",
    width: "100%",
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    flex: 1,
  },

  textWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 15,
    color: Colors.greenDarkest,
    marginVertical: 10,
    fontFamily: "Lato-Regular",
  },
  textBtn: {
    fontSize: 15,
    color: Colors.red,
    marginVertical: 10,
    textAlign: "right",
    fontFamily: "Lato-Bold",
  },
  authButton: {
    backgroundColor: Colors.greenDark,
    width: "100%",
    borderRadius: 7,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  authBtnText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lato-Bold",
  },
  errors: {
    fontSize: 16,
    color: Colors.red,
    marginTop: 10,
    fontFamily: "Lato-Regular",
  },
});
