import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import theme from "@/common/theme";
import Escudo from "./icons/Escudo";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Icono en círculo, más arriba */}
      <View style={styles.iconContainer}>
        <Escudo width={40} height={40} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Orden Público</Text>
        <Text style={styles.subtitle}>
          Sistema de Gestión de Seguridad Ciudadana
        </Text>
      </View>

      {/* Botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.buttonOutlineText}>Entrar como Ciudadano</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => router.push("/auth/loginciudadano")}
        >
          <Text style={styles.buttonPrimaryText}>Entrar como Cuadrante</Text>
        </TouchableOpacity>
      </View>

      {/* Pie de página */}
      <Text style={styles.footerText}>
        Trabajando juntos por una ciudad más segura
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: "flex-start", // Cambiamos a flex-start para posicionar desde arriba
    alignItems: "center",
    padding: 10,
    paddingTop: 50, // Ajusta este valor según lo alto que quieras el contenido
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 4,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonOutline: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 12,
    width: "80%",
  },
  buttonOutlineText: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonPrimary: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 12,
    width: "80%",
  },
  buttonPrimaryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 20,
  },
});
