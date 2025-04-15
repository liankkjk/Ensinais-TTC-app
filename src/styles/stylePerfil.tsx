import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImageContainer: {
    width: "100%",
  },
  headerImage: {
    width: "100%",
    height: 228,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileImage: {
    width: 155,
    height: 155,
    borderRadius: 999,
    borderColor: "#000080",
    borderWidth: 2,
    marginTop: -90,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
