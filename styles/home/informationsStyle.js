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
  gradientLine: {
    height: 3,
    width: "100%",
    borderTopEndRadius: 20,
    marginBottom: 5,
  },
  card: {
    paddingVertical: 15,
    borderRadius: 3,
    flexDirection: "row",
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
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
    maxWidth: "95%",
  },
  image: {
    width: "27%",
    height: "100%",
    borderRadius: 10,
    marginRight: 10,
  },
  //information page
  coverImage: {
    width: "100%",
    height: 220,
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
