import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Orden Público APP' }} />
      <Stack.Screen name='auth/login/index' options={{ title: 'Login' }} />
      <Stack.Screen name='auth/loginciudadano/index' options={{ title: 'Login Ciudadano' }} />
      <Stack.Screen name='recuperarContrasena/cambiar/index' options={{ title: '' }} />
      <Stack.Screen name='recuperarContrasena/recuperar/index' options={{ title: '' }} />
      <Stack.Screen name='recuperarContrasena/verificar/index' options={{ title: '' }} />
      <Stack.Screen name='crearCiudadano/index' options={{ title: 'Resgistro' }} />
      <Stack.Screen name='cambiarCorreo/index' options={{ title: '' }} />
    </Stack>
  )
}
