import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const createticketStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  nearbyTickets: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nearbyTicketsTitle: {
    fontFamily: "Lato-Regular",
    alignSelf: "flex-start",
    fontSize: 16,
    marginVertical: 10,
  },
  title: {
    fontFamily: "Lato-Bold",
    alignSelf: "center",
    fontSize: 18,
    marginVertical: 10,
    color: Colors.greenDarkest,
  },
  form: {
    paddingTop: 20,
  },
  btn: {
    backgroundColor: Colors.greenDark,
    width: "100%",
    borderRadius: 7,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lato-Bold",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.greenDarkest,
    fontFamily: "Lato-Regular",
    marginVertical: 10,
  },
  imgLarge: {
    width: "100%",
    minHeight: 220,
    borderRadius: 10,
  },
  smallImgsWrapper: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    borderRadius: 10,
  },
  imgSmall: {
    width: "80%",
    height: 140,
    borderRadius: 10,
  },
  imgSmallWrapper: {
    width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 10,
  },
});
