import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Screen } from "../components";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const data = [
  { label: "ST building", value: "st" },
  { label: "EC building", value: "ec" },

  { label: "GE building", value: "ge" },
  { label: "CU building", value: "cu" },
];
const HomeScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 1,

          borderRadius: 15,
        }}
      >
        <View style={styles.head}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 34,
              marginVertical: 10,
            }}
          >
            CIU MAPMATE
          </Text>

          <Text
            style={{
              fontSize: 18,
            }}
            numberOfLines={2}
          >
            Never get lost on campus with
            <Text style={{ fontWeight: "600" }}> CIU MAPMATE</Text>.
          </Text>
        </View>
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 18,
            }}
            numberOfLines={2}
          >
            Please select where you want to go on campus and let us take you
            there with ease
          </Text>
          <View style={styles.content}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select an option" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderRightIcon={() => (
                <FontAwesome
                  style={styles.icon}
                  color={isFocus ? "#801818" : "black"}
                  name="chevron-circle-down"
                  size={28}
                />
              )}
            />
          </View>
          <View
            style={{
              backgroundColor: value === null ? "" : "#000",
              marginHorizontal: 5,
              padding: 10,
              borderRadius: 16,
              borderWidth: 2,
              marginVertical: 350,
              borderColor: value === null ? "#a9a9a9" : "#000",
            }}
          >
            <Button
              onPress={() => navigation.navigate("Congrats")}
              disabled={value === null ? true : false}
              title="Take me there!"
              color={value === null ? "" : "#fff"}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: "red",
    alignItems: "center",
    borderRadius: 1,
  },
  head: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  body: {
    marginVertical: 40,
  },
  content: {
    marginVertical: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    marginStart: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
