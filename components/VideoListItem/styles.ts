import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoCard: {},
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 10
  },
  time: {
    color: "#fff",
    fontWeight: "bold"
  },

  //
  titleRow: {
    flexDirection: "row",
    padding: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  //
  middleContainer: {
    marginHorizontal: 10,
    flex: 1
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500"
  }
});

export default styles;
