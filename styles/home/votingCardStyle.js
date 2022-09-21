import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const votingCardStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Colors.blueish,
    padding: 10,
    flex: 0.5,
    borderRadius: 10,
    marginLeft: 5,
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    color: Colors.green,
    letterSpacing: 3,
  },
  newsTitle: {
    color: Colors.darkBlue,
    fontFamily: "Lato-Bold",
    fontSize: 15,
    marginTop: 15,
    maxWidth: "80%",
  },
  line: {
    height: 4,
    width: 40,
    borderRadius: 40,
    backgroundColor: Colors.green,
    marginTop: 10,
  },
  date: {
    fontSize: 11,
    color: Colors.gray,
    fontFamily: "Lato-Light",
    letterSpacing: 1,
    marginTop: 10,
  },
  desc: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: "Lato-Light",
    letterSpacing: 1,
    marginTop: 10,
  },
  showMore: {
    fontSize: 14,
    color: Colors.green,
    fontFamily: "Lato-Bold",
    letterSpacing: 0,
    marginTop: 25,
  },
});
