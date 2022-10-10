import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const conversationStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    marginBottom: 4,
    fontFamily: "Roboto-Medium",
    color: Colors.darkBlue,
  },
  headerSubTitle: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
    color: Colors.grey,
    lineHeight: 20,
  },
  separator: {
    height: 3,
    width: "11%",
    borderRadius: 20,
    backgroundColor: Colors.green,
    marginBottom: 15,
  },
  headerBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    paddingVertical: 20,
  },
  detailsTitle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: Colors.darkBlue,
  },
  detailsSubtitle: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: Colors.grey,
    marginTop: 5,
  },
  thumbnail: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    marginTop: 15,
  },
  message: {
    flexDirection: "row",
    borderTopColor: Colors.lightGrey4,
    borderTopWidth: 1,
    paddingVertical: 18,
    flex: 1,
  },
  messageImage: {
    height: 32,
    width: 32,
    flex: 0.1,
    aspectRatio: 1,
    marginRight: 15,
    borderRadius: 50,
  },
  messageDetails: {
    flex: 0.9,
  },
  messageSender: {
    fontSize: 16,
    fontFamily: "Roboto-Light",
    color: Colors.darkBlue,
    marginBottom: 3,
  },
  messageSubtitle: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: Colors.grey,
  },
  messageText: {
    fontSize: 14,
    fontFamily: "Roboto-Light",
    color: Colors.darkBlue,
    marginTop: 15,
  },
  rowSbFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  //new message input
  messageInputContainer: {
    backgroundColor: "#fff",
    borderTopColor: Colors.lightGrey4,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  messageInputImgWrapper: {
    flex: 0.2,
  },
  messageInputImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  messageInput: {
    backgroundColor: Colors.lightGrey4,
    flex: 0.9,
    minHeight: 50,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 14,
    textAlignVertical: "top",
  },
  messageSendBtn: {
    position: "absolute",
    right: 30,
    top: 20,
  },
});
