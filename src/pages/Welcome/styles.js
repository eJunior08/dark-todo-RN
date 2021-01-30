import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 36,
    color: "#FFF",
  },
  subtitle: {
    fontFamily: "Poppins_300Light",
    fontSize: 24,
    color: "#C4C4C4",
    maxWidth: 215,
  },
  button: {
    backgroundColor: "#191919",
    borderRadius: 8,
    width: 105,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#C4C4C4",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
});

export default styles;
