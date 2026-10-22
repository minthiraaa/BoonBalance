import React, { useMemo, useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, Image, StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { places } from "../data/places";

const categories = [
  {
    key: "Love", label: "ความรัก", icon: "heart",
    color: "#DB608A", bg: "#FCE5ED",
  },
  {
    key: "Work", label: "การงาน", icon: "briefcase",
    color: "#773D9A", bg: "#EEE1F6",
  },
  {
    key: "Health", label: "สุขภาพ", icon: "leaf",
    color: "#9460B5", bg: "#F0E4F8",
  },
  {
    key: "Lucky", label: "โชคลาภ", icon: "server",
    color: "#DAA031", bg: "#FFF3D8",
  },
];

export default function ServiceScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [saved, setSaved] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return showAll ? places : places.slice(0, 4);

    return places.filter((p) => {
      const category = categories.find((c) => c.key === p.code);

      return [
        p.name, p.location, p.description,
        p.code, category?.label || "",
      ].join(" ").toLowerCase().includes(q);
    });
  }, [search, showAll]);

  const toggleSaved = (id) => {
    setSaved((old) =>
      old.includes(id)
        ? old.filter((x) => x !== id)
        : [...old, id]
    );
  };

  return (
    <SafeAreaView style={s.page}>
      <View pointerEvents="none" style={s.blob} />

      <ScrollView
        contentContainerStyle={s.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={s.header}>
          <View style={s.brand}>
            <View style={s.logo}>
              <Ionicons
                name="location-outline"
                size={39}
                color="#86529A"
              />
              <View style={s.leaf}>
                <Ionicons
                  name="leaf-outline"
                  size={15}
                  color="#86529A"
                />
              </View>
            </View>

            <Text style={s.brandName}>BOONBALANCE</Text>
          </View>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="การแจ้งเตือน"
            style={s.iconButton}
            onPress={() => setShowNotifications((v) => !v)}
          >
            <Ionicons
              name={
                showNotifications
                  ? "notifications"
                  : "notifications-outline"
              }
              size={25}
              color="#612651"
            />
          </TouchableOpacity>
        </View>

        {showNotifications && (
          <View style={s.notification}>
            <Text style={s.noticeText}>
              ยังไม่มีการแจ้งเตือนใหม่
            </Text>
          </View>
        )}

        <Text style={s.welcome}>
          ค้นพบสถานที่ที่ใช่ เติมพลังใจในทุกวัน
        </Text>

        <View style={s.searchBox}>
          <Ionicons
            name="search-outline"
            size={21}
            color="#96869E"
          />

          <TextInput
            accessibilityLabel="ค้นหาสถานที่หรือความต้องการ"
            placeholder="ค้นหาสถานที่ วัด หรือความต้องการ…"
            placeholderTextColor="#96869E"
            style={s.input}
            value={search}
            onChangeText={setSearch}
            returnKeyType="search"
          />

          {!!search && (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="ล้างคำค้นหา"
              onPress={() => setSearch("")}
            >
              <Ionicons
                name="close-circle"
                size={20}
                color="#96869E"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={s.categoryRow}>
          {categories.map((c) => (
            <TouchableOpacity
              key={c.key}
              accessibilityRole="button"
              accessibilityLabel={c.label}
              activeOpacity={0.8}
              style={s.category}
              onPress={() =>
                navigation.navigate("CategoryDetail", {
                  title: c.key,
                })
              }
            >
              <View
                style={[
                  s.categoryIcon,
                  { backgroundColor: c.bg },
                ]}
              >
                <Ionicons
                  name={c.icon}
                  size={27}
                  color={c.color}
                />
              </View>

              <Text style={s.categoryLabel}>{c.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>
            {search.trim()
              ? "ผลการค้นหา"
              : showAll
                ? "สถานที่ทั้งหมด"
                : "สถานที่แนะนำสำหรับคุณ"}
          </Text>

          {!search.trim() && (
            <TouchableOpacity
              accessibilityRole="button"
              style={s.seeAll}
              onPress={() => setShowAll((v) => !v)}
            >
              <Text style={s.seeAllText}>
                {showAll ? "แนะนำ" : "ดูทั้งหมด"}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={16}
                color="#9C6BB1"
              />
            </TouchableOpacity>
          )}
        </View>

        {results.length === 0 && (
          <View style={s.empty}>
            <Ionicons
              name="search-outline"
              size={30}
              color="#A17CB2"
            />
            <Text style={s.noticeText}>
              ไม่พบสถานที่ ลองเปลี่ยนคำค้นหานะคะ
            </Text>
          </View>
        )}

        {results.map((p) => (
          <View key={p.id} style={s.card}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`ดูรายละเอียด ${p.name}`}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate("PlaceDetail", { place: p })
              }
            >
              <Image
                source={p.picture}
                style={s.photo}
                resizeMode="cover"
                accessibilityLabel={p.name}
              />

              <View style={s.cardBody}>
                <Text style={s.placeName}>{p.name}</Text>

                <View style={s.metaRow}>
                  <View style={s.location}>
                    <Ionicons
                      name="location-outline"
                      size={13}
                      color="#A58DAF"
                    />
                    <Text
                      style={s.locationText}
                      numberOfLines={1}
                    >
                      {p.location}
                    </Text>
                  </View>

                  <View style={s.rating}>
                    <Ionicons
                      name="star"
                      size={16}
                      color="#F5B735"
                    />
                    <Text style={s.ratingText}>{p.rate}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`${
                saved.includes(p.id)
                  ? "ยกเลิกบันทึก"
                  : "บันทึก"
              } ${p.name}`}
              accessibilityState={{
                selected: saved.includes(p.id),
              }}
              style={s.favorite}
              onPress={() => toggleSaved(p.id)}
            >
              <Ionicons
                name={
                  saved.includes(p.id)
                    ? "heart"
                    : "heart-outline"
                }
                size={23}
                color="#D45D8A"
              />
            </TouchableOpacity>
          </View>
        ))}

        <Text style={s.footer}>
          โหมดพรีเซนต์ • คะแนนตัวอย่างจากต้นแบบเดิม{"\n"}
          รายการที่บันทึกอยู่เฉพาะหน้านี้ ไม่เชื่อมบัญชีผู้ใช้
        </Text>

        <TouchableOpacity
          accessibilityRole="button"
          style={s.back}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons
            name="chevron-back"
            size={16}
            color="#9C6BB1"
          />
          <Text style={s.seeAllText}>
            กลับหน้าเข้าสู่ระบบ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F8F1FC",
  },
  blob: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#EFE1F7",
    top: -110,
    left: -110,
  },
  content: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: 40,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  leaf: {
    position: "absolute",
    top: 9,
    left: 13,
    backgroundColor: "#F3E9F9",
  },
  brandName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#361642",
    letterSpacing: -0.7,
    flexShrink: 1,
  },
  iconButton: {
    padding: 8,
  },
  welcome: {
    fontSize: 13,
    color: "#907C9A",
    marginTop: 10,
    marginBottom: 21,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 22,
    paddingHorizontal: 15,
    minHeight: 52,
    gap: 9,
    shadowColor: "#78438A",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  input: {
    flex: 1,
    color: "#42284B",
    fontSize: 13,
    paddingVertical: 14,
    minWidth: 0,
  },
  categoryRow: {
    flexDirection: "row",
    gap: 9,
    marginTop: 22,
    marginBottom: 28,
  },
  category: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 15,
    shadowColor: "#78438A",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  categoryIcon: {
    width: 49,
    height: 49,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4B2856",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#44204F",
    flex: 1,
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  seeAllText: {
    fontSize: 12,
    color: "#9C6BB1",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 23,
    overflow: "hidden",
    marginBottom: 18,
    shadowColor: "#78438A",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  photo: {
    width: "100%",
    height: 194,
    backgroundColor: "#EBDFF1",
  },
  cardBody: {
    padding: 16,
  },
  placeName: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
    color: "#44204F",
    marginBottom: 9,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 3,
  },
  locationText: {
    fontSize: 11,
    color: "#98859F",
    flex: 1,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#44204F",
  },
  favorite: {
    position: "absolute",
    right: 13,
    top: 13,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
  },
  noticeText: {
    fontSize: 13,
    lineHeight: 21,
    color: "#82688F",
    textAlign: "center",
  },
  empty: {
    alignItems: "center",
    paddingVertical: 35,
    gap: 10,
  },
  footer: {
    fontSize: 11,
    lineHeight: 18,
    textAlign: "center",
    color: "#9F8AA9",
    marginTop: 4,
  },
  back: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});