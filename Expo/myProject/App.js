import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"20px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
