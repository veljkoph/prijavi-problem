import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const ticketStyle = StyleSheet.create({
  card: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 2,
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
    fontSize: 15,
    fontFamily: "Lato-Regular",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  date: {
    fontSize: 14,
    fontFamily: "Lato-LightItalic",
    marginVertical: 10,
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
