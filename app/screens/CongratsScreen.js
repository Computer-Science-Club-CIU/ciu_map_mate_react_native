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
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../components";

export default function CongratsScreen() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <View style={{ marginVertical: 100 }}>
        <Text
          style={{
            fontSize: wp(10),
            textAlign: "center",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          YAY!!!
        </Text>
        <Text
          style={{
            fontSize: wp(3.5),
            textAlign: "center",
            letterSpacing: 1,

            color: "#000",
          }}
        >
          Congratulations! You have arrived your location. Leave a review to
          help us be better.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={{
          backgroundColor: "#000",
          marginHorizontal: 5,
          padding: 16,
          borderRadius: 16,
          marginTop: 360,
        }}
      >
        <Text
          style={{
            fontSize: wp(5),

            textAlign: "center",
            color: "white",
          }}
        >
          Back to Home Dcreen
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});
