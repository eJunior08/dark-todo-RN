import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import CategoryItem from "../../components/CategoryItem";
import CategoryList from "../../components/CategoryList";
import MenuHeader from "../../components/MenuHeader";
import TaskList from "../../components/TaskList";

import styles from "./styles";

const DATA = [
  {
    id: "1",
    category: "Design",
    qtyTask: 10,
    title: "Sketching",
    backgroundColor: "#F0F4FF",
  },
  {
    id: "2",
    category: "Sport",
    qtyTask: 3,
    title: "Wireframing",
    backgroundColor: "#EEFCEF",
  },
  {
    id: "3",
    category: "Meeting",
    qtyTask: 1,
    title: "Visual Design",
    backgroundColor: "#FFF7E4",
  },
];

const Home = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <MenuHeader />

        <View style={styles.searchContainer}>
          <Text style={styles.searchTitle}>What are you doing today?</Text>
          <TextInput
            placeholder="Search Contest"
            placeholderTextColor="#C4C4C4"
            style={styles.searchInput}
          />
        </View>

        <CategoryList data={DATA} />

        <TaskList data={DATA} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
