import { StyleSheet } from "react-native";

export const serviceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F3FB",
    paddingHorizontal: 20,
  },

  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  header: { fontSize: 26, fontWeight: "800", color: "#2A1830", marginTop: 10 },
  subHeader: { fontSize: 15, color: "#5C5C6C", marginBottom: 24 },

  searchWrap: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#fff",
    borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 26,
    shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 3, elevation: 2,
  },
  searchIcon: { marginRight: 8 },
  searchBar: { flex: 1, fontSize: 15, color: "#2A1830" },

  grid: { paddingBottom: 40 },
  gridRow: { justifyContent: "space-between" },

  card: {
    width: "48%", height: 190, borderRadius: 24, overflow: "hidden",
    marginBottom: 18, position: "relative",
    shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 4, elevation: 2,
    backgroundColor: "#FFF",
  },
  cardBg: { position: "absolute", inset: 0, borderRadius: 24, opacity: 1 },
  cardBg2: {
    position: "absolute", right: -25, bottom: -25,
    width: 140, height: 140, borderRadius: 70, opacity: 0.9,
  },

  cardContent: { flex: 1, padding: 16, justifyContent: "space-between" },
  emojiWrap: {
    width: 64, height: 64, borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.96)", alignItems: "center", justifyContent: "center",
  },
  emoji: { fontSize: 30 },
  cardTitle: { fontSize: 20, fontWeight: "800", color: "#2A1830" },
  cardArrow: {
    position: "absolute", right: 12, bottom: 12,
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.9)", alignItems: "center", justifyContent: "center",
  },

  blobOne: {
    position: "absolute", top: -60, left: -40,
    width: 220, height: 220, borderRadius: 110,
    backgroundColor: "#EADDF6", opacity: 0.55,
  },
  blobTwo: {
    position: "absolute", right: -70, top: 120,
    width: 260, height: 260, borderRadius: 130,
    backgroundColor: "#F4E9F9", opacity: 0.55,
  },
});
