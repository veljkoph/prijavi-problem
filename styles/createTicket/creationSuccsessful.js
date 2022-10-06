import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const creationSuccsessfulStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },

  title: {
    fontFamily: "Roboto-Medium",
    color: Colors.darkBlue,
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    fontFamily: "Roboto-Regular",
    color: Colors.grey,
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
    width: "65%",
    alignSelf: "center",
    lineHeight: 25,
  },
  descriptionBlue: {
    fontFamily: "Roboto-Medium",
    color: Colors.darkBlue,
  },
  dotsLeft: {
    position: "absolute",
    height: 110,
    aspectRatio: 1,
    top: 10,
    left: 20,
  },
  dotsRight: {
    position: "absolute",
    height: 140,
    aspectRatio: 1,
    top: 30,
    right: 10,
  },
  line: {
    height: 5,
    width: 60,
    borderRadius: 10,
    backgroundColor: Colors.green,
    alignSelf: "center",
    marginTop: 20,
  },
  banner: {
    alignSelf: "center",
    height: 250,
    aspectRatio: 1,
    marginTop: 15,
  },
  backBtn: {
    backgroundColor: Colors.green,
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  backBtnText: {
    fontFamily: "Roboto-Medium",
    color: "#fff",
    fontSize: 18,
  },
});
