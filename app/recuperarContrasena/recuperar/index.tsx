import Email from '@/app/icons/Email'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useRouter } from 'expo-router'
export default function RecuperarContrasena() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      {/* Barra de estado */}

      {/* Contenido principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Recuperar contraseña</Text>
        <Text style={styles.description}>
          Ingrese el correo electrónico de la cuenta para poder enviar un código de recuperación
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor='#9ca3af'
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/recuperarContrasena/cambiar')}
        >
          <Text style={styles.buttonText}>Solicitar código de recuperación</Text>
        </TouchableOpacity>

        <View style={styles.note}>
          {/* Aquí puedes colocar un ícono SVG o vectorial */}
          <Text style={styles.iconPlaceholder}>
            <Email />
          </Text>
          <Text style={styles.noteText}>Te enviaremos un correo con instrucciones.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Contenedor que ocupa toda la pantalla, sin simular un marco adicional
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // bg-gray-100
    padding: 0
  },
  // Barra de estado (puedes omitirla si ya usas el status bar nativo del dispositivo)
  statusBar: {
    height: 32, // h-8 (32px)
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rotatedIcon: {
    transform: [{ rotate: '90deg' }],
    marginRight: 4
  },
  statusText: {
    color: 'white',
    fontSize: 12
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  battery: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  },
  batteryFill: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4
  },
  // Contenido principal que ocupa el resto de la pantalla
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
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    maxWidth: '100%' // Asegura que no se salga del contenedor
  },
  iconPlaceholder: {
    fontSize: 20,
    marginRight: 8,
    color: '#6b7280'
  },
  noteText: {
    fontSize: 14,
    color: '#6b7280', // text-gray-500
    flexShrink: 1 // Permite que el texto se ajuste dentro del contenedor sin desbordarse
  }
})
