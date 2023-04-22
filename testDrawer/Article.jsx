import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Article() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View style={styles.textView}>
          <Text style={styles.text}>Hello Article</Text>
          <TouchableOpacity>
            <Text style={styles.qqqq}>Hello Article</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.textView}>
          <Text style={styles.text}>Hello Article </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textView: {
    marginTop: 100,
    marginLeft: 50
  },
  container: {
    flex: 1,
    backgroundColor: "yellow"
  },
  containerOne: {
    flex: 1,
    backgroundColor: "darkblue"
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "red"
  },
  text: {
    color: "white"
  },
  qqqq: {
    // flex: 1,

    marginTop: 100,
    marginLeft: 50,
    backgroundColor: "wheat",
    color: "black",
    textAlign: "center",
    // alignItems: "center",
    width: 100,
    height: 50,
    borderRadius: 5,
    lineHeight: 50
    // justifyContent: "center",
    // alignItems: "center"
  },
  buttonText: {
    flex: 1,
    justifyContent: "center"
  }
});
