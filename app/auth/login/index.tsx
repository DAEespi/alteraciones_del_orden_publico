import theme from '@/common/theme'
import { Link } from 'expo-router'
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
export default function Login() {

  const router = useRouter()
  return (
    <View style={styles.container}>
      {/* Cabecera */}

      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle} />
        <View style={styles.smallCircle1} />
        <View style={styles.smallCircle2} />
      </View>

      {/* Formulario */}
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            keyboardType='email-address'
            placeholderTextColor='#6b7280'
          />
          <Text style={styles.helperText}>Se utilizará para acceder a tu cuenta</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu contraseña'
            secureTextEntry
            placeholderTextColor='#6b7280'
          />
          <Text style={styles.helperText}>Debe contener al menos 8 caracteres</Text>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Link style={styles.forgotPasswordText} href='/recuperarContrasena/recuperar'>
            ¿Olvidaste tu contraseña?
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton} onPress={()=>router.push('/crearCiudadano')}>
          <Text style={styles.createAccountButtonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* Espacio publicitario */}
      <View style={styles.adContainer}>
        <Text style={styles.adText}>Publicidad</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // Contenedor principal ocupa toda la pantalla sin simular un marco
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary, // bg-gray-100
    padding: 10
  },
  // Cabecera con botón para volver y título
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
    fontSize: 16,
    color: '#1f2937'
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#1f2937'
  },
  // Sección del logo
  logoContainer: {
    alignItems: 'center',
    marginVertical: 32,
    position: 'relative'
  },
  logoCircle: {
    width: 64, // w-16
    height: 64, // h-16
    backgroundColor: '#e5e7eb', // bg-gray-200
    borderRadius: 32
  },
  smallCircle1: {
    width: 24, // w-6
    height: 24, // h-6
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    position: 'absolute',
    right: -20, // Ajusta este valor según lo necesites
    top: 0
  },
  smallCircle2: {
    width: 16, // w-4
    height: 16, // h-4
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    position: 'absolute',
    right: -24, // Ajusta este valor según lo necesites
    top: 16
  },
  // Formulario
  formContainer: {
    paddingHorizontal: 16
  },
  formGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: '#1f2937'
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#1f2937'
  },
  helperText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 8
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#1f2937'
  },
  loginButton: {
    backgroundColor: '#22c55e', // bg-green-500
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8
  },
  createAccountButtonText: {
    color: '#1f2937',
    fontWeight: '500',
    fontSize: 16
  },
  // Espacio publicitario
  adContainer: {
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  adText: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 16,
    color: '#6b7280'
  }
})
