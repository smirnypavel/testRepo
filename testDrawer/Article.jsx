import { Text, View, StyleSheet } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonAdd } from "./components/Button/Buttons";

export default function Article() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View style={styles.textView}>
          <Text style={styles.text}>Hello Article</Text>
          <ButtonAdd />
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
    marginLeft: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  containerOne: {
    flex: 1,
    backgroundColor: "darkblue",
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "red",
  },
  text: {
    color: "white",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
  },
});
