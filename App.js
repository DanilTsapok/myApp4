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
// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
// } from "react-native";

// class App extends Component {
//   state = {
//     email: "",
//     password: "",
//   };
//   handleEmail = (text) => {
//     this.setState({ email: text });
//   };
//   handlePassword = (text) => {
//     this.setState({ password: text });
//   };
//   login = (email, pass) => {
//     alert("email: " + email + " password: " + pass);
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           underlineColorAndroid="transparent"
//           placeholder="Email"
//           placeholderTextColor="#9a73ef"
//           autoCapitalize="none"
//           onChangeText={this.handleEmail}
//         />

//         <TextInput
//           style={styles.input}
//           underlineColorAndroid="transparent"
//           placeholder="Password"
//           placeholderTextColor="#9a73ef"
//           autoCapitalize="none"
//           onChangeText={this.handlePassword}
//         />

//         <TouchableOpacity
//           style={styles.submitButton}
//           onPress={() => this.login(this.state.email, this.state.password)}
//         >
//           <Text style={styles.submitButtonText}> Submit </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 23,
//   },
//   input: {
//     margin: 15,
//     height: 40,
//     borderColor: "#7a42f4",
//     borderWidth: 1,
//   },
//   submitButton: {
//     backgroundColor: "#7a42f4",
//     padding: 10,
//     margin: 15,
//     height: 40,
//   },
//   submitButtonText: {
//     color: "white",
//   },
// });
