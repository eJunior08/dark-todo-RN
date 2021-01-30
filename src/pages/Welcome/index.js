import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Welcome = () => {
  const { navigate } = useNavigation();

  function handleNext() {
    navigate("home");
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Manage your task very easly</Text>
      </View>

      <RectButton rippleColor="#aaa" onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </RectButton>
    </View>
  );
};

export default Welcome;
