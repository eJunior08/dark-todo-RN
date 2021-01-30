import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    color: "#C4C4C4",
    marginBottom: 15,
  },
  task: {
    height: 80,
    backgroundColor: "#000",
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: "center",
    paddingLeft: 60,
  },
  taskTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#C4C4C4",
  },
  infoTask: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
    color: "#5A5A5A",
  },
});

export default styles;
