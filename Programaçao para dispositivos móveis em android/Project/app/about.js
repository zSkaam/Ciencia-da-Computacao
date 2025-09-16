import { View, Text, Button } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

export default function About() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>ℹ️ About</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Hora: {hora}</Text>
      <Button title="Atualizar hora" onPress={() => setHora(new Date().toLocaleTimeString())} />

      <View style={{ marginTop: 30 }}>
        <Link href="/" asChild>
          <Button title="Voltar para Home" />
        </Link>
      </View>
    </View>
  );
}
