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
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 7,
  },
  gradient: {
    position: "absolute",
    flex: 1,
    flexGrow: 1,
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  upperContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  nameWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: "Lato-Regular",
    color: Colors.green,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    color: Colors.darkBlue,
    marginTop: 5,
  },
  redText: {
    color: Colors.red,
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  messagesText: {
    fontSize: 13,
    color: Colors.grey,
    marginTop: 5,
  },
  name: {
    fontSize: 20,
    fontFamily: "Lato-Light",
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
    fontFamily: "Lato-Italic",
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
