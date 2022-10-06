import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const informationsStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    marginBottom: 4,
    fontFamily: "Roboto-Regular",
  },
  card: {
    flex: 0.4,
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    fontFamily: "Roboto-Regular",
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
    zIndex: 9,
  },
  backBtn: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
  },
  backBtnText: {
    fontFamily: "Roboto-Medium",
    marginLeft: 15,
    fontSize: 16,
    color: Colors.darkBlue,
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
    fontFamily: "Roboto-Light",
    color: Colors.darkGrey,
    marginVertical: 10,
  },
});
