import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const scale = size => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImageContainer: {
    width: "100%",
  },
  headerImage: {
    width: "100%",
    height: scale(220),
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: scale(-90),
  },
  profileImage: {
    width: scale(150),
    height: scale(150),
    borderRadius: 999,
    borderColor: "#fff",
    borderWidth: 2,
  },
  profileName: {
    fontSize: scale(26),
    fontWeight: "bold",
    marginTop: scale(10),
    color: "#f2921d",
  },
  menuIcon: {
    position: "absolute",
    top: scale(40),
    right: scale(20),
    zIndex: 1,
  },
  expContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(15),
    paddingHorizontal: scale(20),
  },
  level: {
    marginTop: scale(10),
    marginBottom: scale(25),
  },
  expBarBackground: {
    flex: 1,
    height: scale(30),
    backgroundColor: "#ccc",
    borderRadius: scale(10),
    justifyContent: "center",
    overflow: "hidden",
  },
  expBarFill: {
    position: "absolute",
    left: 0,
    width: "80%",
    height: scale(30),
    backgroundColor: "#002366",
    borderRadius: scale(10),
  },
  expText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    zIndex: 1,
    fontSize: scale(20),
  },
  levelText: {
    marginLeft: scale(10),
    fontSize: scale(24),
    color: "#002366",
    fontWeight: "bold",
  },
});

export default styles;
