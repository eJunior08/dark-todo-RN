import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

import toyface from "../../assets/images/ToyFace.png";
import Menu from "../../assets/icons/Menu/Menu.png";

const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={toyface}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={styles.menu}>
        <Image source={Menu} style={{ width: "100%", resizeMode: "contain" }} />
      </View>
    </View>
  );
};

export default MenuHeader;
