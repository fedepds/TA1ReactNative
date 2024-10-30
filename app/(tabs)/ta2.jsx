import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const images = [
  {
    id: "Cachorro",
    uri: require("/Users/federicopizarro/Desktop/TAsReactNative/TAsRN/components/images/perro1.jpg"),
    description: "Perro cachorro",
  },
  { id:"Coco",
    uri:require("/Users/federicopizarro/Desktop/TAsReactNative/TAsRN/components/images/perro2.jpg"),
    description: "Coco perro simpatico",
  },
  {
    id: "Candy",
    uri: require("/Users/federicopizarro/Desktop/TAsReactNative/TAsRN/components/images/perro3.jpg"),
    description: "Perro dulce",
  },
];

export default function Ta2() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item.uri} style={styles.image} />
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          horizontal={true}
          contentContainerStyle={styles.flatListContainer}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  flatListContainer: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  description: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
