import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const scale = size => (width / 375) * size;

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
    height: scale(220),
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileImage: {
    width: scale(150),
    height: scale(150),
    borderRadius: 999,
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: scale(-90),
  },
  profileName: {
    fontSize: scale(22),
    fontWeight: "bold",
    marginTop: scale(10),
    color: "#f2921d",
  },
  menuIcon: {
    position: "absolute",
    top: scale(20),
    right: scale(20),
    zIndex: 1,
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(15),
  },
  level: {
    marginTop: scale(10),
    marginBottom: scale(25),
  },
  expBarBackground: {
    flex: 1,
    height: scale(30),
    backgroundColor: '#ccc',
    borderRadius: scale(10),
    justifyContent: 'center',
  },
  expBarFill: {
    position: 'absolute',
    left: 0,
    height: scale(30),
    width: '40%',
    backgroundColor: '#002366',
    borderRadius: scale(10),
  },
  expText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
    fontSize: scale(18),
  },
  levelText: {
    marginLeft: scale(10),
    fontSize: scale(16),
    color: '#002366',
    fontWeight: 'bold',
  },
});

export default styles;