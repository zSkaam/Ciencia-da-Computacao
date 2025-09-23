import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
function GeneroPicker(){
  const [genero, setGenero] = useState("nehuma");
  return(
    <View>
     <Text>selecione o sexo:</Text>
     <Picker
     selectedvalue={genero}
     onValueChange={(itemValue, itemindex) => setGenero(itemValue)}
  >
  <Picker.Item label="Homem" value="Homem" />
  <Picker.Item label="Mulher" value="Mulher" />
  </Picker>
  <Text>sexo: {genero}</Text>
  </View>
  );
}
export default GeneroPicker;
