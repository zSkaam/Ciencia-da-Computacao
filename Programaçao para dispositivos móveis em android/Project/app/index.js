import { View, Text, Button } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>🏠 Home</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Contador: {count}</Text>
      <Button title="Aumentar" onPress={() => setCount(count + 1)} />

      <View style={{ marginTop: 30 }}>
        <Link href="/about" asChild>
          <Button title="Ir para About" />
        </Link>
      </View>
    </View>
  );
}
