import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const profileInfoStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: Colors.blueish,
    position: "relative",
    paddingBottom: 20,
    borderRadius: 15,
    marginTop: 10,
    // shadowColor: Colors.grey,
    // shadowOffset: {
    //   width: 0,
    //   height: 7,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 7,
    // elevation: 7,
  },
  profileIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 25,
    width: 25,
    aspectRatio: 1,
  },
  upperContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  nameWrapper: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  greenLine: {
    height: 3,
    backgroundColor: Colors.green,
    width: 40,
    borderRadius: 10,
  },
  bottomContainer: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: "Roboto-Regular",
    color: Colors.green,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: Colors.darkBlue,
    marginTop: 5,
  },
  redText: {
    color: Colors.red,
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
  messagesText: {
    fontSize: 13,
    color: Colors.grey,
    marginTop: 5,
    fontFamily: "Roboto-Regular",
  },
  name: {
    fontSize: 20,
    fontFamily: "Roboto-Light",
    color: Colors.darkBlue,
    marginVertical: 17,
  },
  placeholderLine: {
    backgroundColor: Colors.lightGrey2,
    borderRadius: 10,
    marginVertical: 17,
    height: 24,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Roboto-Medium",
    color: Colors.green2,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    position: "absolute",
  },
  imageBtn: {
    borderColor: Colors.lightGrey,
    // borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
