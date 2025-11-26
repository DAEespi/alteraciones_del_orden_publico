import theme from '@/common/theme'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function CrearCiudadano() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      {/* Title */}

      {/* Form */}
      <View style={styles.form}>
        {/* Name Field */}
        <View>
          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} placeholder='Ingresa tu nombre' />
        </View>

        {/* Email Field */}
        <View>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            keyboardType='email-address'
          />
        </View>

        {/* Phone Field */}
        <View>
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu teléfono'
            keyboardType='phone-pad'
          />
        </View>

        {/* Password Field */}
        <View>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder='Ingresa tu contraseña' secureTextEntry />
        </View>

        {/* Confirm Password Field */}
        <View>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput style={styles.input} placeholder='Confirma tu contraseña' secureTextEntry />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/recuperarContrasena/verificar')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center'
  },
  form: {
    width: '100%',
    maxWidth: 400,
    gap: 12
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4
  },
  input: {
    height: 48,
    backgroundColor: '#f9fafb',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#111827'
  },
  button: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
