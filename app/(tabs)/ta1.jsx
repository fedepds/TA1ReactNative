import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";


export default function listaTareas() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, { id: Date.now().toString(), texto: tarea }]);
      setTarea("");
    }
    else {
      Alert.alert(
        'Texto vacío',
        'No ingresó tarea',
        [
          {
            text: 'Cancelar',
          }
        ]
      );
    }
    
  };
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((item) => item.id !== id));
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonEliminar: {
    backgroundColor: "#FF6347", 
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  tareaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
});
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Lista de Tareas</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe una tarea"
          value={tarea}
          onChangeText={setTarea}
        />
        <TouchableOpacity style={styles.boton} onPress={agregarTarea}>
          <Text style={styles.textoBoton}>Agregar Tarea</Text>
        </TouchableOpacity>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tareaContainer}>
              <Text>{item.texto}</Text>
              <TouchableOpacity
                style={styles.botonEliminar}
                onPress={() => eliminarTarea(item.id)}
              >
                <Text style={styles.textoBoton}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );

  
}
