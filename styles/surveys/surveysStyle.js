import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const surveysStyle = StyleSheet.create({
  card: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  cardTextWrapper: {
    flexWrap: "wrap",
    flex: 0.72,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    flexWrap: "wrap",
    width: "90%",
  },
  cardSubtitle: {
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    marginTop: 10,
    color: "#8a817c",
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
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 30,
    alignItems: "center",
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
  },
  surveyOptionText: {
    fontSize: 16,
    fontFamily: "Roboto-Light",
    marginVertical: 15,
    maxHeight: "80%",
    flexWrap: "wrap",
    textAlign: "left",
  },
  surveyPercentageText: {
    position: "absolute",
    right: 10,
    fontSize: 14,
    fontFamily: "Roboto-Light",
  },
  message: {
    marginVertical: 14,
    fontFamily: "Roboto-Bold",
    color: Colors.greenDark,
  },
});
