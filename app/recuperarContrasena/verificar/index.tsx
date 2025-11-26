import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import Email from '@/app/icons/Email'

export default function VerificarContrasena() {
  const router = useRouter()
  const [codigo, setCodigo] = useState(['', '', '', '', '', ''])

  const handleChangeText = (text: string, index: number) => {
    const newCodigo = [...codigo]
    newCodigo[index] = text
    setCodigo(newCodigo)
  }

  return (
    <View style={styles.container}>
      {/* Contenido principal */}
      <View style={styles.content}>
        {/* Título */}
        <Text style={styles.title}>Ingresa el código</Text>

        {/* Descripción */}
        <Text style={styles.description}>
          Hemos enviado un código de confirmación de 6 dígitos a{' '}
          <Text style={styles.boldText}>usuario@ejemplo.com</Text>. Ingresa el código a continuación
          para verificar tu cuenta.
        </Text>

        {/* Casillas de código */}
        <View style={styles.codeContainer}>
          {codigo.map((value, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={value}
              onChangeText={(text) => handleChangeText(text, index)}
              maxLength={1}
              keyboardType='numeric'
              textAlign='center'
            />
          ))}
        </View>

        {/* Botón de Verificar */}
        <TouchableOpacity style={styles.button} onPress={()=>router.push('/auth/login')}>
          <Text style={styles.buttonText}>Verificar código</Text>
        </TouchableOpacity>

        {/* Reenviar código y Cambiar correo */}
        <View style={styles.resendContainer}>
          <View style={styles.resendLeft}>
            <Email size={24} />
            <TouchableOpacity>
              <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.timerText}>(24s)</Text>
        </View>

        <TouchableOpacity onPress={()=>router.push('/cambiarCorreo/index')}>
          <Text style={styles.changeEmailText}>Cambiar correo electrónico</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6' // bg-gray-100
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
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 24
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black'
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#22c55e',
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
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8
  },
  resendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  resendText: {
    fontSize: 14,
    color: '#6b7280'
  },
  timerText: {
    fontSize: 14,
    color: '#9ca3af'
  },
  changeEmailText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  }
})
