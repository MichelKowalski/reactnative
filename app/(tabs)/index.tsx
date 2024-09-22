import { Image, StyleSheet, Platform, Text, View, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30 }}>RÖD</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 110,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 30 }}>GRÖN</Text>
        </View>
        <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          height: 50,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 2,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "black",
            flex: 1,
          }}
        ></View>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          backgroundColor: "orange",
          height: 50,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ fontSize: 30 }}>ORANGE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
