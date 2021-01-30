import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

/* Styles */
import styles from "./styles";

const TaskList = ({ data }) => {
  const { navigate } = useNavigation();

  function handlePress() {
    navigate("detail");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Task</Text>

      {data.map((d) => (
        <RectButton
          key={d.id}
          rippleColor="#aaa"
          onPress={handlePress}
          style={styles.task}
        >
          <Text style={styles.taskTitle}>{d.title}</Text>
          <Text style={styles.infoTask}>2 Completed</Text>
        </RectButton>
      ))}
    </View>
  );
};

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TaskList;
