import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function CambiarContrasena() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Cambiar contraseña</Text>
        <Text style={styles.description}>
          Ingresa tu nueva contraseña y confírmala para actualizarla.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña nueva</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu nueva contraseña'
            secureTextEntry
            placeholderTextColor='#9ca3af'
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder='Confirma tu nueva contraseña'
            secureTextEntry
            placeholderTextColor='#9ca3af'
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/recuperarContrasena/verificar')} // Cambia la ruta según necesites
        >
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // bg-gray-100
    padding: 0
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 32,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    color: '#374151', // text-gray-700
    lineHeight: 22,
    marginBottom: 24
  },
  inputGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb', // border-gray-200
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#22c55e', // bg-green-500
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
})

