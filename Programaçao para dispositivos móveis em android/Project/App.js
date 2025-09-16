import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

function LanguagePicker(){ 
  const [selectedLanguage, setSelectedLanguague] = useState("Java");

  return(
    <View style={styles.container}>
    <Text style={styles.label}>Select a Programming Language:</Text>
    <Picker
    selectdValue={selectedLanguage}
    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    style={styles.picker}
    >
    <picker.Item label="java" value="java" />
    <picker.Item label="javascript" value="javascript" />
  )
}
