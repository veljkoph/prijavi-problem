import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const informationsStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    marginBottom: 4,
    fontFamily: "Lato-Regular",
  },
  card: {
    paddingVertical: 15,
    borderRadius: 3,
    flexDirection: "row",
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: "Lato-Bold",
    color: Colors.black,
    marginBottom: 10,
    maxWidth: "100%",
  },
  lightText: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: "Lato-Light",
    color: Colors.darkGrey,
    maxWidth: "95%",
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    color: Colors.black,
    maxWidth: "80%",
  },
  textWrapper: {
    flex: 0.76,
  },
  image: {
    flex: 0.25,
    //   height: "100%",
  },
  //information page
  coverImage: {
    width: "100%",
    height: 220,
    backgroundColor: "white",
  },
  articleTextContainer: {
    padding: 10,
  },
  articleTitle: {
    fontSize: 22,
    fontFamily: "Lato-Bold",
    color: Colors.black,
    maxWidth: "95%",
  },
  articleText: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: Colors.black,
    lineHeight: 24,
  },
  articleLightText: {
    fontSize: 15,
    fontFamily: "Lato-LightItalic",
    color: Colors.darkGrey,
    marginVertical: 10,
  },
});
