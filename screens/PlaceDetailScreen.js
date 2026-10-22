// screens/PlaceDetailScreen.js
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { placeDetailStyles as styles } from "../stylesheets/placeDetailStyles";

const THEME_COLORS = {
  Love: "#FF6FA2",
  Work: "#6FA8FF",
  Health: "#34C7A7",
  Lucky: "#8CCB4B",
};

const THEME_BACKGROUNDS = {
  Love: "#FFF1F6",
  Work: "#F0F6FF",
  Health: "#ECFBF6",
  Lucky: "#F5FAEB",
};

const THEME_EMOJIS = {
  Love: "💌",
  Work: "💼",
  Health: "🩺",
  Lucky: "🍀",
};

export default function PlaceDetailScreen({ route, navigation }) {
  const { place } = route.params;
  const insets = useSafeAreaInsets();
  const [mapError, setMapError] = React.useState("");
  const category = place?.code || "Love";

  const themeColor = THEME_COLORS[category] || "#7E57C2";
  const themeBg = THEME_BACKGROUNDS[category] || "#F6F0FA";
  const emoji = THEME_EMOJIS[category] || "✨";

  // ⭐ ฟังก์ชันเปิด Google Maps + Navigation
  const openInGoogleMaps = async () => {
    if (!place || !place.location) return;

    const destination = encodeURIComponent(place.mapQuery || place.name);

    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    try { await Linking.openURL(url); setMapError(""); }
    catch { setMapError("เปิดแผนที่ไม่ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต"); }
  };

  return (
    <View style={[styles.screen, { backgroundColor: themeBg }]}>
      {/* HEADER IMAGE */}
      <View style={styles.heroWrap}>
        {place.picture ? (
          <Image source={place.picture} style={styles.hero} resizeMode="cover" />
        ) : null}
        <View style={styles.heroOverlay} />

        {/* HEADER TOP BAR */}
        <View style={[styles.heroTopBar, { top: Math.max(insets.top, 20) + 12 }]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* TITLE ON IMAGE */}
        <View style={styles.heroTitleWrap}>
          <Text style={styles.heroTitle}>
            {place.name} {emoji}
          </Text>
        </View>
      </View>

      {/* BODY */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View
          style={[
            styles.body,
            {
              backgroundColor: "#fff",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              marginTop: -12,
              shadowColor: themeColor,
              shadowOpacity: 0.1,
              shadowRadius: 6,
            },
          ]}
        >
          {/* RATING + NAV BUTTON */}
          <View style={styles.rowBetween}>
            <View
              style={[
                styles.ratingRow,
                { backgroundColor: `${themeColor}22` }, // 20% transparent
              ]}
            >
              <Ionicons name="star" size={18} color="#FFB300" />
              <Text style={styles.ratingText}>{place.rate}</Text>
            </View>

            {/* ⭐ ปุ่มนำทางด้วย Google Maps */}
            <TouchableOpacity
              onPress={openInGoogleMaps}
              style={[styles.ctaBtn, { backgroundColor: themeColor }]}
            >
              <Ionicons name="navigate" size={18} color="#fff" />
              <Text style={styles.ctaText}>นำทาง</Text>
            </TouchableOpacity>
          </View>

          {!!mapError && <Text accessibilityRole="alert" style={{color: "#a22", marginBottom: 12}}>{mapError}</Text>}
          <Text style={{color: "#786c7c", fontSize: 12, marginBottom: 16, lineHeight: 18}}>
            โปรดตรวจสอบเวลาและข้อปฏิบัติกับสถานที่ก่อนเดินทาง
          </Text>
          {/* DETAILS */}
          {place.location ? (
            <View style={styles.infoRow}>
              <Ionicons
                name="location-outline"
                size={18}
                color={themeColor}
                style={styles.infoIcon}
              />
              <Text
                style={styles.linkText}
                onPress={openInGoogleMaps} // ⭐ แตะที่อยู่ก็พาไปนำทางได้
              >
                {place.location}
              </Text>
            </View>
          ) : null}

          {place.opening ? (
            <View style={styles.infoRow}>
              <Ionicons
                name="time-outline"
                size={18}
                color={themeColor}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>{place.opening}</Text>
            </View>
          ) : null}

          {place.color ? (
            <View style={styles.infoRow}>
              <Ionicons
                name="color-palette-outline"
                size={18}
                color={themeColor}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>สีมงคล: {place.color}</Text>
            </View>
          ) : null}

          {/* BLOCKS */}
          {place.howToPray ? (
            <View style={[styles.block, { backgroundColor: `${themeColor}15` }]}>
              <Text style={styles.blockTitle}>🙏 วิธีบูชา</Text>
              <Text style={styles.blockText}>{place.howToPray}</Text>
            </View>
          ) : null}

          {place.items ? (
            <View style={[styles.block, { backgroundColor: `${themeColor}15` }]}>
              <Text style={styles.blockTitle}>🪷 ของถวาย</Text>
              <Text style={styles.blockText}>{place.items}</Text>
            </View>
          ) : null}

          {place.code ? (
            <View style={[styles.infoRow, { marginTop: 10 }]}>
              <Ionicons
                name="pricetag-outline"
                size={18}
                color={themeColor}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>{place.code}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
