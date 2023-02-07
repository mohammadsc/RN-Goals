import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Goal from "./Goal";
import InserGoal from "./InsertGoal";

const MainPage = () => {
  const [list, setList] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 30,
      paddingHorizontal: 16,
      flex: 1,
      marginTop: 25,
    },
    listStyle: {
      flex: 5,
      marginTop: 16,
    },
    addNew: {
      justifyContent: "center",
      flexDirection: "row",
      padding: 20,
    },
    text: {
      color: "blue",
    },
  });

  function handleAddGoal(text) {
    if (text.length != 0) {
      let obj = { id: Math.random().toString(), value: text };
      let arr = [...list];
      arr.push(obj);
      setList(arr);
      setModalVisibility(false);
    }
  }

  function handleRemove(id) {
    setList((currentlist) => {
      return currentlist.filter((i) => i.id != id);
    });
  }

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {modalVisibility && (
          <InserGoal
            visible={modalVisibility}
            handleAddGoal={handleAddGoal}
            closeModal={closeModal}
          />
        )}

        <Pressable
          onPress={() => setModalVisibility(true)}
          android_ripple={{ color: "#bac9f3" }}
          style={styles.addNew}
        >
          <Text style={styles.text}>Add New Task</Text>
        </Pressable>

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
    </>
  );
};

export default MainPage;
