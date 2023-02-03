import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Goal from "./Goal";
import InserGoal from "./InsertGoal";

const MainPage = () => {
  const [list, setList] = useState([]);

  const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 30,
      paddingHorizontal: 16,
      flex: 1,
    },
    listStyle: {
      flex: 5,
    },
  });

  function handleAddGoal(text) {
    if (text.length != 0) {
      let obj = { id: Math.random().toString(), value: text };
      let arr = [...list];
      arr.push(obj);
      setList(arr);
    }
  }

  function handleRemove(id) {
    setList((currentlist) => {
      return currentlist.filter((i) => i.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <InserGoal handleAddGoal={handleAddGoal} />
      <View style={styles.listStyle}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <Goal
                text={itemData.item.value}
                id={itemData.item.id}
                handleRemove={handleRemove}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

export default MainPage;
