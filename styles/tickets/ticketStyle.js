import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const ticketStyle = StyleSheet.create({
  card: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 17,
    paddingHorizontal: 10,
    flex: 1,
    width: Dimensions.get("window").width - 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  noTicketsAnim: {
    height: 90,
    width: 90,
    borderRadius: 5,
    marginRight: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    flexWrap: "wrap",
    width: "90%",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Roboto-Light",
    marginVertical: 10,
    width: "90%",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    borderRadius: 50,
    marginRight: 10,
  },
});
