// screens/ServiceScreen.js
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  StatusBar,

} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { serviceStyles as styles } from "../stylesheets/serviceStyles";

const CATEGORIES = [
  { thai: "ความรัก", key: "Love",   emoji: "💌", colorFrom: "#FFE6F0", colorTo: "#FFB3CC" },
  { thai: "การงาน", key: "Work",   emoji: "💼", colorFrom: "#EAF3FF", colorTo: "#B5D2FF" },
  { thai: "สุขภาพ", key: "Health", emoji: "🩺", colorFrom: "#EAF9F4", colorTo: "#98E0CF" },
  { thai: "โชคลาภ", key: "Lucky",  emoji: "🍀", colorFrom: "#F3FADF", colorTo: "#CFE9A6" },
];

export default function ServiceScreen({ navigation }) {
  // ⭐ เก็บค่าคำค้นหาจาก Search bar
  const [searchQuery, setSearchQuery] = useState("");

  // ⭐ กรองหมวดตามข้อความที่พิมพ์ (ไม่สนตัวพิมพ์เล็กใหญ่)
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter((item) =>
      (item.key + " " + item.thai).toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      accessibilityRole="button"
      accessibilityLabel={item.key + " " + item.thai}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("CategoryDetail", { title: item.key })}
    >
      <View style={[styles.cardBg, { backgroundColor: item.colorFrom }]} />
      <View style={[styles.cardBg2, { backgroundColor: item.colorTo }]} />
      <View style={styles.cardContent}>
        <View style={styles.emojiWrap}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.key}</Text>
        <View style={styles.cardArrow}>
          <Ionicons name="chevron-forward" size={20} color="#2A1830" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F3FB",
        paddingTop: 16,
      }}
    >
      <View style={styles.container}>
        <View style={styles.blobOne} />
        <View style={styles.blobTwo} />

        {/* ✅ ปุ่ม Back ไป Login / หน้าก่อนหน้า */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
          onPress={() => {
            if (navigation.canGoBack()) navigation.goBack();
            else navigation.navigate("Login");
          }}
        >
          <Ionicons name="chevron-back" size={22} color="#2A1830" />
          <Text style={{ fontSize: 16, color: "#2A1830", marginLeft: 4 }}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Choose a category</Text>
        <Text style={styles.subHeader}>
          Pick a vibe to explore curated places and rituals ✨
        </Text>

        {/* 🔍 SEARCH BAR */}
        <View style={styles.searchWrap}>
          <Ionicons name="search" size={18} style={styles.searchIcon} color="#8A7F95" />
          <TextInput
            placeholder="Search / ค้นหาหมวด"
            placeholderTextColor="#8A7F95"
            style={styles.searchBar}
            returnKeyType="search"
            value={searchQuery}
            onChangeText={setSearchQuery}   // ⭐ พิมพ์แล้วอัพเดต state
          />
        </View>

        {/* ถ้าเสิร์ชแล้วไม่เจออะไรเลย */}
        {filteredCategories.length === 0 ? (
          <View style={{ marginTop: 40, alignItems: "center" }}>
            <Text style={{ color: "#8A7F95" }}>No category found</Text>
          </View>
        ) : (
          <FlatList
            data={filteredCategories}       // ⭐ ใช้ข้อมูลที่กรองแล้ว
            keyExtractor={(it) => it.key}
            numColumns={2}
            contentContainerStyle={styles.grid}
            columnWrapperStyle={styles.gridRow}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
