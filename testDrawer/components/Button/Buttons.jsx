import { Text, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./ButtonStyle";

export const ButtonAdd = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonww}>+</Text>
    </TouchableOpacity>
  );
};
export default ButtonAdd;
