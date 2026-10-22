import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginStyles as styles } from "../stylesheets/loginStyles";
export default function SignupScreen({navigation}) {
  return <View style={styles.container}><View style={styles.content}>
    <Text style={styles.title}>Sign Up</Text>
    <Text style={[styles.subtitle, {lineHeight: 25}]}>เวอร์ชันนี้เป็นแอปสาธิตแบบออฟไลน์{String.fromCharCode(10)}ยังไม่สร้างหรือจัดเก็บบัญชีผู้ใช้จริง</Text>
    <TouchableOpacity accessibilityRole="button" style={styles.loginBtn} onPress={() => navigation.navigate("Service")}><Text style={styles.loginText}>ทดลองใช้งานแอป</Text></TouchableOpacity>
    <TouchableOpacity accessibilityRole="button" style={{padding: 20}} onPress={() => navigation.goBack()}><Text>กลับไปหน้า Login</Text></TouchableOpacity>
  </View></View>;
}
