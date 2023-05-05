// // import { Text, View, StyleSheet } from "react-native";
// // // import { TouchableOpacity } from "react-native-gesture-handler";
// // import { ButtonAdd } from "./components/Button/Buttons";

// // export default function Article() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.containerOne}>
// //         <View style={styles.textView}>
// //           <Text style={styles.text}>Hello Article</Text>
// //           <ButtonAdd />
// //         </View>
// //       </View>
// //       <View style={styles.containerTwo}>
// //         <View style={styles.textView}>
// //           <Text style={styles.text}>Hello Article </Text>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   textView: {
// //     marginTop: 100,
// //     marginLeft: 50
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: "yellow"
// //   },
// //   containerOne: {
// //     flex: 1,
// //     backgroundColor: "darkgreen"
// //   },
// //   containerTwo: {
// //     flex: 1,
// //     backgroundColor: "darkblue"
// //   },
// //   text: {
// //     color: "white"
// //   },

// //   buttonText: {
// //     flex: 1,
// //     justifyContent: "center"
// //   }
// // });
// import React from "react";
// import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import { Feather } from "@expo/vector-icons";

// export default function Article() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <View style={styles.textView}>
//           <Text style={styles.text}>Hello Article</Text>
//         </View>
//       </View>
//       <View style={styles.bottomContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Feather name="minus" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.statsButton}>
//           <View style={styles.statsButtonInner}>
//             <Text style={styles.statsButtonText}>Stats</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Feather name="plus" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "darkgrey",
//     padding: 16
//   },
//   topContainer: {
//     marginTop: 100,
//     flex: 0.9,
//     backgroundColor: "lightgray",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     overflow: "hidden"
//   },
//   bottomContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 16
//   },
//   textView: {
//     margin: 24
//   },
//   text: {
//     color: "black",
//     fontSize: 24,
//     fontWeight: "bold"
//   },
//   button: {
//     backgroundColor: "lightblue",
//     padding: 16,
//     width: 150,
//     borderRadius: 10
//   },
//   statsButton: {
//     backgroundColor: "orange",
//     padding: 16,
//     borderRadius: 50,
//     overflow: "hidden"
//   },
//   statsButtonInner: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "orange"
//   },
//   statsButtonText: {
//     color: "white",
//     fontWeight: "bold"
//   }
// });

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Article() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.balanceView}>
          <View style={styles.balanceItemView}>
            <Text style={styles.balanceTitle}>Загальний баланс</Text>
            <Text style={styles.balanceAmount}>$2000</Text>
          </View>
          <View style={styles.balanceItemView}>
            <Text style={styles.balanceTitle}>Поступило</Text>
            <Text style={styles.balanceAmount}>$3000</Text>
          </View>
          <View style={styles.balanceItemView}>
            <Text style={styles.balanceTitle}>Витрачено</Text>
            <Text style={styles.balanceAmount}>$1000</Text>
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Hello Article</Text>
        </View>
        <View style={styles.sloganView}>
          <Text style={styles.sloganText}>
            "Накопичення - це перший крок на шляху до фінансової свободи"
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Feather name="minus" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statsButton}>
          <View style={styles.statsButtonInner}>
            <Text style={styles.statsButtonText}>Stats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgrey",
    padding: 16
  },
  topContainer: {
    marginTop: 50,
    flex: 0.9,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden"
  },
  balanceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  balanceItemView: {
    alignItems: "center"
  },
  balanceTitle: {
    color: "gray"
  },
  balanceAmount: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold"
  },
  textView: {
    marginVertical: 24
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold"
  },
  sloganView: {
    marginTop: 16
  },
  sloganText: {
    color: "black",
    fontStyle: "italic"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 16,
    width: 150,
    borderRadius: 10,
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#3d6aff",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
    backgroundColor: "transparent",
    color: "#fff",
    overflow: "hidden",
    boxShadow: "0 0 0 0 transparent",
    transition: "all 0.2s ease-in"
  },
  statsButton: {
    backgroundColor: "orange",
    padding: 16,
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: "hidden"
  },
  statsButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  statsButtonText: {
    color: "gold",
    fontWeight: "bold"
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0d6efdff",
    padding: 0
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    width: 120,

    padding: 16,
    marginHorizontal: 0,
    marginVertical: 0
  },
  statsButton: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8
  },
  statsButtonInner: {
    flexDirection: "row",
    alignItems: "center"
  },
  statsButtonText: {
    color: "#0d6efdff",
    fontWeight: "bold",
    marginLeft: 8
  }
});
