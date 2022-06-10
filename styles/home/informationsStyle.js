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
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 3,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    color: Colors.black,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    color: Colors.black,
  },
});
