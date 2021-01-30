import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  searchContainer: {
    marginBottom: 30,
    marginTop: 45,
    paddingHorizontal: 20,
  },
  searchTitle: {
    color: "#c4c4c4",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
  searchInput: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    height: 50,
    marginTop: 15,
    paddingLeft: 30,
    color: "#C4C4C4",
  },
});

export default styles;
