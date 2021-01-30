import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

/* Icons */
import LeftArrow from "../../assets/icons/LeftArrow/LeftArrow.png";
import More from "../../assets/icons/More/More.png";

/* Styles */
import styles from "./styles";

const Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View style={styles.iconsContainer}>
          <Image source={LeftArrow} />
          <Image source={More} />
        </View>

        <View style={styles.detailContainer}>
          <View
            style={{
              width: 65,
              height: 5,
              backgroundColor: "#1e1e1e",
              alignSelf: "center",
              marginVertical: 20,
            }}
          ></View>

          <View style={styles.categoryContainer}>
            <Text style={styles.category}>Design</Text>
          </View>

          <View style={styles.mainInfoContainer}>
            <Text style={styles.titleTask}>Sketching</Text>
            <View style={styles.infoRemainingContainer}>
              <Text style={styles.qtyTask}>2</Text>
              <Text style={styles.remaining}>Remaining</Text>
            </View>
          </View>

          <View style={styles.subInfoContainer}>
            <View>
              <Text style={styles.subInfoTitle}>Assign</Text>
              <Text style={styles.subInfo}>Jane Hendrick</Text>
            </View>

            <View>
              <Text style={[styles.subInfoTitle, { textAlign: "right" }]}>
                Due Dated
              </Text>
              <Text style={[styles.subInfo, { textAlign: "right" }]}>
                Fri, 25 Dec
              </Text>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View>
            <View style={styles.itemTodo}>
              <Text style={styles.todo}>Sketch object 01</Text>
            </View>
            <View style={styles.itemTodo}>
              <Text style={styles.todo}>Sketch object 01</Text>
            </View>
            <View style={styles.itemTodo}>
              <Text style={styles.todo}>Sketch object 01</Text>
            </View>
            <View style={styles.itemTodo}>
              <Text style={styles.todo}>Sketch object 01</Text>
            </View>
          </View>

          <View style={styles.detailTextContainer}>
            <Text style={styles.detailText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque cursus orci at felis iaculis, nec placerat quam
              laoreet. Sed quis lacus fermentum, sodales neque feugiat, sodales
              risus.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
