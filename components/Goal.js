import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const Goal = (props) => {
  const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 30,
      paddingHorizontal: 16,
      flex: 1,
    },

    goalItem: {
      flexDirection: "row-reverse",

      backgroundColor: "#5e0acc",

      margin: 8,
      borderRadius: 10,
    },
    goalText: {
      color: "white",
      alignItems: "center",
      minWidth: "100%",

      marginLeft: 5,
      padding: 20,
    },
  });

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.handleRemove.bind(this, props.id)}
        android_ripple={{ color: "#ffffff" }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default Goal;
