import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function handleTextChange(txt) {
    setText(txt);
  }
  function handleAddGoal() {
    let obj = { id: Math.random().toString(), value: text };
    setList((currentlist) => [...currentlist, obj]);
    setText("");
  }
  function handleRemove(g) {
    const arr = [...list];
    arr.filter((i) => i.id !== g.id);

    setList((currentlist) => {
      return currentlist.filter((i) => i.id != g.id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="اهدافت رو بنویس"
          style={styles.inputStyle}
          onChangeText={handleTextChange}
          value={text}
        />
        <Button title="اضافه کن" onPress={handleAddGoal} />
      </View>
      <View style={styles.listStyle}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalContainer}>
                <Text style={styles.goalItem}>{itemData.item.value}</Text>
                <Button
                  title="حذف"
                  color={"red"}
                  onPress={handleRemove.bind(this, itemData.item)}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row-reverse",
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
    marginLeft: 10,
    padding: 7,
  },
  listStyle: {
    flex: 5,
  },
  goalContainer: {
    margin: 8,

    flexDirection: "row-reverse",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalItem: {
    color: "white",
    padding: 10,
    width: "80%",

    marginLeft: 5,
  },
});
