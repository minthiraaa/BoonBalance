// stylesheets/placeDetailStyles.js
import { StyleSheet, Platform } from "react-native";

export const placeDetailStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F6F0FA",
  },

  /** HEADER IMAGE **/
  heroWrap: {
    width: "100%",
    height: 280, // ความสูงของภาพ header
    position: "relative",
  },
  hero: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  heroTopBar: {
    position: "absolute",
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitleWrap: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 14,
  },
  heroTitle: {
    fontSize: 24,
    lineHeight: 30,
    color: "#fff",
    fontWeight: "800",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  /** BODY **/
  body: {
    backgroundColor: "#fff",
    // ปรับให้เลื่อนลงมาจากรูปพอดี ไม่โดนบัง
    marginTop: -8,
    paddingTop: 26,
    paddingHorizontal: 18,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  /** RATING + BUTTON ROW **/
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF7E6",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "700",
    color: "#2A1830",
  },
  ctaBtn: {
    backgroundColor: "#7E57C2",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "700",
  },

  /** INFO ROWS **/
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    color: "#2A1830",
    fontSize: 15,
    lineHeight: 22,
  },
  linkText: {
    flex: 1,
    color: "#5C6BC0",
    fontSize: 15,
    lineHeight: 22,
    textDecorationLine: "underline",
  },

  /** DETAIL BLOCKS **/
  block: {
    marginTop: 14,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#F7F3FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1.5,
    elevation: 1,
  },
  blockTitle: {
    fontWeight: "800",
    fontSize: 16,
    color: "#2A1830",
    marginBottom: 6,
  },
  blockText: {
    color: "#2A1830",
    fontSize: 15,
    lineHeight: 22,
  },
});
