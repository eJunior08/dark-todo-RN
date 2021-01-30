import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    marginHorizontal: 20,
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF7E4",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
  },
});

export default styles;
