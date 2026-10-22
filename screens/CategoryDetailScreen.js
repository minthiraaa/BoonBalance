// screens/CategoryDetailScreen.js
import React from "react";
import { getPlacesByCategory } from "../data/places";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { detailStyles as styles } from "../stylesheets/detailStyles";

// สีหลักของแต่ละหมวด
const THEME_COLORS = {
  Love: "#FF6FA2",
  Work: "#6FA8FF",
  Health: "#34C7A7",
  Lucky: "#8CCB4B",
};

// สีพื้นหลังของแต่ละหมวด (พาสเทล)
const THEME_BACKGROUNDS = {
  Love: "#FFF1F6",
  Work: "#F0F6FF",
  Health: "#ECFBF6",
  Lucky: "#F5FAEB",
};

// Emoji ของแต่ละหมวด
const THEME_EMOJIS = {
  Love: "💌",
  Work: "💼",
  Health: "🩺",
  Lucky: "🍀",
};

export default function CategoryDetailScreen({ route, navigation }) {
  const { title = "Love" } = route.params || {};
  const themeColor = THEME_COLORS[title] || "#7E57C2";
  const themeBg = THEME_BACKGROUNDS[title] || "#F6F0FA";
  const emoji = THEME_EMOJIS[title] || "✨";

  const places = getPlacesByCategory(title);
  const loading = false;
  const err = null;
  const insets = useSafeAreaInsets();

  const onBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate("Service");
  };

  return (
    <View style={[styles.container, { backgroundColor: themeBg }]}>
      {/* HEADER BAR */}
      <View
        style={{
          backgroundColor: themeColor,
          paddingTop: Math.max(insets.top, 20) + 16,
          paddingBottom: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity accessibilityRole="button" accessibilityLabel="กลับไปเลือกหมวด" onPress={onBack} style={{ marginRight: 10 }}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "800",
              color: "#fff",
              textShadowColor: "rgba(0,0,0,0.1)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 1,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 8,
              color: "#fff",
            }}
          >
            {emoji}
          </Text>
        </View>
      </View>

      {/* BODY */}
      {loading ? (
        <ActivityIndicator
          style={{ flex: 1, marginTop: 40 }}
          size="large"
          color={themeColor}
        />
      ) : err ? (
        <Text style={{ color: "red", padding: 16 }}>Error: {err}</Text>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16, paddingBottom: 60 }}
        >
          {places.map((p) => (
            <View key={p.id} style={styles.card}>
              {p.picture ? (
                <Image
                  source={p.picture}
                  style={{
                    width: "100%",
                    height: 180,
                    borderRadius: 12,
                    marginBottom: 12,
                  }}
                  resizeMode="cover"
                />
              ) : null}

              <Text style={styles.cardTitle}>{p.name}</Text>
              {p.description ? (
                <Text style={styles.cardText}>{p.description}</Text>
              ) : null}

              {/* ปุ่ม + ดาว */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                  marginRight: 6,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PlaceDetail", { place: p })
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: themeColor,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    borderRadius: 10,
                  }}
                >
                  <Ionicons
                    name="information-circle-outline"
                    size={18}
                    color="#fff"
                  />
                  <Text
                    style={{
                      color: "#fff",
                      marginLeft: 6,
                      marginTop: -3,
                      fontWeight: "600",
                    }}
                  >
                    ดูรายละเอียด
                  </Text>
                </TouchableOpacity>

                {p.rate ? (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 4,
                    }}
                  >
                    <Ionicons name="star" size={18} color="#FFB300" />
                    <Text
                      style={{
                        marginLeft: 6,
                        fontWeight: "700",
                        fontSize: 16,
                        color: "#2A1830",
                      }}
                    >
                      {p.rate}
                    </Text>
                  </View>
                ) : (
                  <View style={{ width: 1 }} />
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
