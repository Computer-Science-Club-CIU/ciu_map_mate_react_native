import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Screen } from "../components";

export default function WelcomeScreen() {
  return (
    <Screen style={styles.container}>
      <View style={{ marginVertical: 8 }}>
        <Text
          style={{
            fontSize: wp(10),
            textAlign: "center",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          CIU MAPMATE
        </Text>
        <Text
          style={{
            fontSize: wp(3.5),
            textAlign: "center",
            letterSpacing: 1,
            fontWeight: 800,
            color: "#000",
          }}
        >
          Welcome!
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/ciu.png")}
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log("hello")}
        style={{
          backgroundColor: "#801818",
          marginHorizontal: 5,
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          GET START
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
});
