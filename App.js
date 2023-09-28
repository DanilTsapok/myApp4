import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const num = "Button";
  const [textContent, setText] = useState("");
  const changeText = (text) => {
    setText(text);
  };
  const buttons = [
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
    { text: "Hello" },
  ];
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View>
            {buttons.map((value, index) => (
              <Button key={index} title={value.text} />
            ))}
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={changeText}
            />
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: "red",
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              {textContent}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "grey",
    borderRadius: 10,
    paddingLeft: 10,
  },
  btnSubmit: {
    padding: 10,
    margin: 15,
    backgroundColor: "green",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
  },
  btnSubmitText: {
    color: "white",
  },
});
