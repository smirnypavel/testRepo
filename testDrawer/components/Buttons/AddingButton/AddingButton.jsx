import { Text, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./StylesAddingButton";

export const AddingButton = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.addingButton}>+</Text>
    </TouchableOpacity>
  );
};
export default AddingButton;
