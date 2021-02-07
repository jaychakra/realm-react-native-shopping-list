import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () => {
  const [items, setItems] = useState([
    {id: Math.random().toString(), text: 'Milk'},
    {id: Math.random().toString(), text: 'Eggs'},
    {id: Math.random().toString(), text: 'Bread'},
    {id: Math.random().toString(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (item) => {
    if (!item) {
      alert('Please enter a value');
      return;
    }

    setItems((prevItems) => [
      {id: Math.random().toString(), text: item},
      ...prevItems,
    ]);
  };

  const renderItem = ({item}) => (
    <ListItem item={item} deleteItem={deleteItem} />
  );

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
