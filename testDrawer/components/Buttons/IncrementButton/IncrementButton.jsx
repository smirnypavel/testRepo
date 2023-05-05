import { Text, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./StylesIncrementButton";

export const IncrementButton = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.IncrementButton}>Inco</Text>
    </TouchableOpacity>
  );
};
export default IncrementButton;
