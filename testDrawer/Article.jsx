import { Text, View, StyleSheet } from "react-native";

export default function Article() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View style={styles.text}>
          <Text>Hello Article</Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.text}>
          <Text>Hello Article</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    marginLeft: 50,
  },
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "yellow",
  },
  containerOne: {
    flex: 1,
    backgroundColor: "green",
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "red",
  },
});
