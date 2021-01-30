import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const CategoryItem = (props) => {
  const { category, qtyTask } = props;
  const { backgroundColor } = props;
  const { isFirst, isLast } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          marginLeft: isFirst ? 20 : 5,
          marginRight: isLast ? 20 : 5,
        },
      ]}
    >
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.qty}>+{qtyTask} Task</Text>
    </View>
  );
};

CategoryItem.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  qtyTask: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default CategoryItem;
