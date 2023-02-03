import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InserGoal = (props) => {
  const [text, setText] = useState("");

  function handleTextChange(txt) {
    setText(txt);
  }

  const handleAdd = () => {
    props.handleAddGoal(text);
    setText("");
  };

  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",

      marginTop: 30,
      alignItems: "center",

      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
      flex: 1,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "75%",
      marginRight: 10,
      padding: 7,
    },
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="what is your next goal?"
        style={styles.inputStyle}
        onChangeText={handleTextChange}
        value={text}
      />
      <Button title="Add Goal" onPress={() => handleAdd()} />
    </View>
  );
};

export default InserGoal;
