import { useRef, useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

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
      justifyContent: "center",

      alignItems: "center",

      flex: 1,
      backgroundColor: "#311b6b",
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "75%",
      marginRight: 10,
      padding: 7,
      marginBottom: 10,
      color: "white",
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 16,
    },
    button: {
      marginHorizontal: 8,
      width: 100,
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
    },
  });

  const inputRef = useRef();

  setTimeout(() => inputRef.current.focus(), 100);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="what is your next task?"
          style={styles.inputStyle}
          onChangeText={handleTextChange}
          value={text}
          ref={inputRef}
          placeholderTextColor={"white"}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => handleAdd()}
              color="#36c03c"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => props.closeModal()}
              color="#828689"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InserGoal;
