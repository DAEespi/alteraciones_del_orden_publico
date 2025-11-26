import Email from '@/app/icons/Email'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function CambiarContrasena() {
  const router=useRouter()
  return (
    <View style={styles.container}>
      {/* Cabecera */}

      {/* Formulario */}
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor='#6b7280'
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Confirmar correo</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            keyboardType='email-address'
            autoCapitalize='none'
            placeholderTextColor='#6b7280'
          />
        </View>

        <TouchableOpacity style={styles.changeButton} onPress={()=>router.push('/recuperarContrasena/recuperar')}>
          <Text style={styles.changeButtonText}>Cambiar correo electronico</Text>
        </TouchableOpacity>

        <View style={styles.note}>
          {/* Aquí puedes colocar un ícono SVG o vectorial */}
          <Text style={styles.iconPlaceholder}>
            <Email />
          </Text>
          <Text style={styles.noteText}>
            Te enviaremos un correo de confirmación a tu nueva dirección.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // bg-gray-100
    padding: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb' // border-gray-200
  },
  backButton: {
    padding: 8
  },
  backButtonText: {
    fontSize: 24,
    color: '#000'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000'
  },
  form: {
    paddingVertical: 16
  },
  formGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000'
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000'
  },
  changeButton: {
    backgroundColor: '#22c55e', // bg-green-500
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16
  },
  changeButtonText: {
    color: '#fff',
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
