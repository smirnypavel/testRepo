import { Text, View, StyleSheet } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Hello Feed</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    marginLeft: 50
  },
  container: {
    flex: 1,
    backgroundColor: "yellow"
  }
});
