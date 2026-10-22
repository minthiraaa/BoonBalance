import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F1FB",
  },
  headerBar: {
    paddingTop: 56,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: "#EFDFF0",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2A1830",
  },
  hint: {
    paddingHorizontal: 16,
    paddingTop: 12,
    color: "#5F4B66",
  },
  cardsWrap: {
    paddingVertical: 18,
    paddingHorizontal: 8,
  },
  card: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#2A1830",
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#3E2C41",
  },
  noteBox: {
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#F4ECF7",
  },
  noteText: {
    fontSize: 12,
    color: "#7A6C87",
  },
});
