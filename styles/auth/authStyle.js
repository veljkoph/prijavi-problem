import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const authStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "100%",
    backgroundColor: Colors.white,
  },
  image: {
    zIndex: 0,
    position: "absolute",
    left: 0,
    top: 0,
    flex: 1,
    width: "100%",
  },
  form: {
    alignSelf: "flex-start",
    width: "100%",
    backgroundColor: Colors.white,
    zIndex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: Colors.greenDarkest,
    marginVertical: 10,
    fontFamily: "Lato-Regular",
  },
  textBtn: {
    fontSize: 15,
    color: Colors.orange3,
    marginVertical: 10,
    textAlign: "right",
    fontFamily: "Lato-Bold",
  },
  authButton: {
    backgroundColor: Colors.green,
    width: "100%",
    borderRadius: 14,
    paddingVertical: 20,
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
