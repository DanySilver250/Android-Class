import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";




export default function RootLayout() {
  const { selected }



  const BasicLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
  }) => {
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map(value => ())}

      </View>
      <TouchableOpacity
        key={value}
        onPress={() => setSelectValue(value)}
        style={[styles.button, selectedValue === value && styles.selected]}
      >
        <Text
          style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
          {value}
        </Text>
      </TouchableOpacity>


    </View>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Hola Red</Text>
      <Text style={styles.blue}>Hola Blue</Text>

      <Text style={styles.red}>Hola Red</Text>
      <Text style={styles.blue}>Hola Blue</Text>

      <Text style={styles.red}>Hola Red</Text>
      <Text style={styles.blue}>Hola Blue</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8BF527",
    flex: 1
  },
  blue: {
    color: "#2A27F5",
    fontWeight: "bold",
    fontSize: 50
  },
  red: {
    color: "#F59127",
    fontWeight: "bold",
    fontSize: 25
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",

  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: "6%",
    minWidth: "48%",
    textAlign: "center"
  },
  selected: {
    backgroundColor: "#0000",
    borderWidth: 0
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: "#FFFF"
  },
  selectedLabel: {
    backgroundColor: "#FC0303"
  }





})