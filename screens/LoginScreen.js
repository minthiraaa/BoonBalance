// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { loginStyles as styles } from "../stylesheets/loginStyles";

export default function LoginScreen({ navigation }) {
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");
  const social = (provider) => setNotice(`${provider} ยังไม่ได้เชื่อมระบบบัญชีจริง กรุณาใช้ปุ่ม Log In เพื่อทดลองแอป`);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>
          BOONBALANCE <Text style={{ fontSize: 30 }}>🔮</Text>
        </Text>
        <Text style={styles.subtitle}>Login</Text>

        {/* Social buttons */}
        <TouchableOpacity accessibilityRole="button" onPress={() => social("Google")} style={styles.socialBtn}>
          <AntDesign name="google" size={19} color="#000" style={styles.icon} />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityRole="button" onPress={() => social("Facebook")} style={[styles.socialBtn, styles.fbBtn]}>
          <FontAwesome
            name="facebook"
            size={19}
            color="#fff"
            style={styles.icon}
          />
          <Text style={[styles.socialText, { color: "#fff" }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityRole="button" onPress={() => social("Apple")} style={[styles.socialBtn, styles.appleBtn]}>
          <FontAwesome
            name="apple"
            size={19}
            color="#fff"
            style={styles.icon}
          />
          <Text style={[styles.socialText, { color: "#fff" }]}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Email Input */}
        <TextInput
          placeholder="Email Address"
            accessibilityLabel="Email Address (optional for demo)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          placeholderTextColor="#777"
          style={styles.input}
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginBtn}
          accessibilityRole="button"
          onPress={() => navigation.navigate("Service")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 12, color: "#5E5266", marginTop: 12, textAlign: "center"}}>โหมดสาธิต • เข้าใช้งานได้โดยไม่ต้องกรอกอีเมล</Text>
        {!!notice && <Text accessibilityRole="alert" style={{fontSize: 12, color: "#612651", textAlign: "center", marginTop: 10}}>{notice}</Text>}
        {/* ➕ Added Sign Up Text */}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ color: "#777", fontSize: 14 }}>
            Don’t have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#7E57C2", fontWeight: "700", fontSize: 14 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
