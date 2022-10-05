import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const informationsStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
    marginBottom: 4,
    fontFamily: "Roboto-Regular",
  },
  card: {
    height: 130,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    // borderBottomColor: Colors.lightGrey,
    // borderBottomWidth: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 10,
    paddingHorizontal: 10,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  },
  cardTitle: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    color: Colors.black,
    marginBottom: 10,
    maxWidth: "90%",
  },
  lightText: {
    fontSize: 12,
    fontFamily: "Roboto-Light",
    color: Colors.darkGrey,
    maxWidth: "95%",
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: Colors.black,
    maxWidth: "80%",
  },
  textWrapper: {
    flex: 0.76,
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  image: {
    flex: 0.3,
    height: 130,
    aspectRatio: 1,
    borderRadius: 10,
    alignSelf: "center",
  },

  //information page
  coverImage: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    alignSelf: "center",
  },
  articleTextContainer: {
    padding: 10,
  },
  articleTitle: {
    fontSize: 22,
    fontFamily: "Roboto-Bold",
    color: Colors.black,
    maxWidth: "95%",
  },
  articleText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: Colors.black,
    lineHeight: 24,
  },
  articleLightText: {
    fontSize: 15,
    fontFamily: "Roboto-LightItalic",
    color: Colors.darkGrey,
    marginVertical: 10,
  },
});
