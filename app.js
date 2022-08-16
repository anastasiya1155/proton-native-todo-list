import React from "react";

import { Window, App, View, Text, Button, TextInput } from "proton-native";

const Example = () => {
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('');

  const handleButtonPress = () => {
    if (value) {
      setTodos(prev => [...prev, value]);
      setValue('');
    }
  }
  const handleTodoClicked = todo => () => {
    setTodos(prev => prev.filter(p => p !== todo));
  }
  return (
    <App>
      <Window style={{ width: 500, height: 520, background: 'white' }}>
        <View style={{flex: 1, padding: 15}}>
          <Text style={{
            fontSize: 24,
            paddingTop: 20,
            qpropertyAlignment: 'AlignHCenter',
            fontFamily: 'sans-serif'
          }}>ToDo List</Text>
          <TextInput
            onChangeText={text => setValue(text)}
            value={value}
            placeholderText="What do you need to do"
            style={{ padding: "4px 8px", border: '1px solid black' }}
          />
          <Button
            onPress={handleButtonPress}
            style={{margin: "10px 0", padding: "4px 0", border: '2px solid purple', borderRadius: 3}}
            title="Add"
          />
          {todos.map(t => <Button key={t} onPress={handleTodoClicked(t)} style={{
            background: 'none',
            border: '1px solid gray',
            borderRadius: 3,
            marginTop: 10,
            padding: "2px 4px"
          }} title={t}/>)}
        </View>
      </Window>
    </App>
  );
}

export default Example;
