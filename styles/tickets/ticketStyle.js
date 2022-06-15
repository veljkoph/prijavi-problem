import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const ticketStyle = StyleSheet.create({
  card: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    // marginVertical: 10,
    flexDirection: "row",
    paddingVertical: 17,
    paddingHorizontal: 10,
    flex: 1,
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: "Lato-Regular",
    flexWrap: "wrap",
    width: "90%",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Lato-Light",
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
