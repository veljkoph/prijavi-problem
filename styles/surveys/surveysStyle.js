import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const surveysStyle = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.blueish,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
  },
  cardTextWrapper: {
    flexWrap: "wrap",
    flex: 0.72,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Roboto-Medium",
    flexWrap: "wrap",
    width: "90%",
    color: Colors.darkBlue,
    textTransform: "uppercase",
  },
  date: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginBottom: 15,
    color: Colors.grey,
  },
  cardSubtitle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    marginTop: 15,
    color: Colors.grey,
  },
  cardIsVoted: {
    flex: 0.24,
    alignItems: "center",
    justifyContent: "center",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30,
    backgroundColor: "#fff",
    flex: 1,
  },
  surveyTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 24,
    color: Colors.greenDarkest,
  },
  surveyQuestion: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: Colors.greenDarkest,
    marginVertical: 20,
    textAlign: "center",
  },
  surveyOption: {
    width: "100%",
    borderRadius: 7,
    backgroundColor: "#fff",
    paddingLeft: 20,
    justifyContent: "center",
    marginVertical: 7,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.lightGrey4,
  },
  surveyOptionText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginVertical: 15,
    maxHeight: "80%",
    flexWrap: "wrap",
    textAlign: "left",
    color: Colors.darkBlue,
    textTransform: "uppercase",
  },
  surveyPercentageText: {
    position: "absolute",
    right: 10,
    fontSize: 14,
    fontFamily: "Roboto-Light",
  },
  message: {
    marginVertical: 24,
    fontFamily: "Roboto-Bold",
    color: Colors.darkBlue,
    textAlign: "center",
    fontSize: 18,
  },
});
