import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const ticketStyle = StyleSheet.create({
  card: {
    backgroundColor: Colors.blueish,
    marginBottom: 10,
    padding: 15,
    borderRadius: 7,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createdAt: {
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    flexWrap: "wrap",
    color: Colors.grey,
    textTransform: "uppercase",
  },
  imageWrapper: {
    padding: 10,
    backgroundColor: Colors.lightGrey3,
    width: 120,
    height: 100,
    alignItems: "center",
    marginTop: 15,
    borderRadius: 25,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.lightGrey,
  },
  placeHolderImage: {
    height: 50,
    width: 70,
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 120,
    borderRadius: 5,
  },
  noTicketsAnim: {
    height: 90,
    width: 90,
    borderRadius: 5,
    marginRight: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    flexWrap: "wrap",
    width: "90%",
    color: Colors.darkBlue,
    textTransform: "uppercase",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Roboto-Light",
    marginVertical: 10,
    width: "90%",
    color: Colors.grey,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    borderRadius: 50,
    marginRight: 10,
  },
  showMoreText: {
    textAlign: "right",
    fontFamily: "Roboto-Medium",
    color: Colors.green,
    marginTop: 10,
  },
});
