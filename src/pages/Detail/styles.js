import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  detailContainer: {
    backgroundColor: "#000",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
  },

  categoryContainer: {
    marginBottom: 10,
  },
  category: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#C4C4C4",
  },

  mainInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  infoRemainingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTask: {
    fontFamily: "Poppins_400Regular",
    fontSize: 24,
    color: "#FFF",
  },
  qtyTask: {
    backgroundColor: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: "black",
    borderRadius: 5,
    marginRight: 5,
  },
  remaining: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    color: "#C4C4C4",
  },

  subInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  subInfoTitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 14,
    color: "#C4C4C4",
  },
  subInfo: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#FFF",
  },

  divider: {
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    marginBottom: 25,
  },

  itemTodo: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  todo: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFF",
  },

  detailTextContainer: {
    marginTop: 15,
  },
  detailText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 30,
    color: "#C4C4C4",
  },
});

export default styles;
