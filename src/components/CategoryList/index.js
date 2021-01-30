import React from "react";
import { FlatList, Text, View } from "react-native";
import PropTypes from "prop-types";

/* Components */
import CategoryItem from "../CategoryItem";

/* Styles */
import styles from "./styles";

const CategoryList = ({ data }) => {
  const renderItem = ({ item, index }) => (
    <CategoryItem
      isFirst={index === 0}
      isLast={index === data.length - 1}
      category={item.category}
      backgroundColor={item.backgroundColor}
      qtyTask={item.qtyTask}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={data}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

CategoryList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CategoryList;
