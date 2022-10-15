import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GroupScreen = () => {
  return (
    <View style={styles.groupView2}>
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <View style={styles.groupView}>
        <Text style={styles.letsMakeYourHomeAsDream}>
          Let’s make your home as dream home
        </Text>
        <Text style={styles.text}>“</Text>
        <View style={styles.lineView} />
        <Text style={styles.aDText}>AD</Text>
      </View>
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={styles.image7Icon}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={styles.groupView1}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-26.png")}
        />
        <View style={styles.rectangleView1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image8Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1920,
    height: 1080,
  },
  letsMakeYourHomeAsDream: {
    position: "absolute",
    top: 32,
    left: -316,
    fontSize: 20,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
    width: 316,
    height: 48,
  },
  text: {
    position: "absolute",
    top: 0,
    left: -342,
    fontSize: 64,
    fontFamily: "Raleway",
    color: "rgba(188, 74, 60, 0.54)",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 109.5,
    left: -72.5,
    borderStyle: "solid",
    borderColor: "#aaa",
    borderTopWidth: 1,
    width: 19,
    height: 1,
  },
  aDText: {
    position: "absolute",
    top: 100,
    left: -42,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#aaa",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 736,
    left: 1866,
    width: 342,
    height: 119,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  image9Icon: {
    position: "absolute",
    top: 381,
    left: 1328,
    width: 236,
    height: 236,
  },
  image7Icon: {
    position: "absolute",
    top: 43,
    left: 65,
    width: 800,
    height: 416,
  },
  image6Icon: {
    position: "absolute",
    top: 507,
    left: 65,
    width: 450,
    height: 300,
  },
  image4Icon: {
    position: "absolute",
    top: 855,
    left: 65,
    width: 282,
    height: 178,
  },
  image5Icon: {
    position: "absolute",
    top: 43,
    left: 900,
    width: 350,
    height: 525,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: -21.33,
    backgroundColor: "#555",
    width: 21.33,
    height: 1.5,
  },
  rectangleIcon: {
    position: "absolute",
    top: 9,
    left: -21.33,
    width: 21.33,
    height: 1.5,
  },
  rectangleView1: {
    position: "absolute",
    top: 18,
    left: -21.33,
    backgroundColor: "#555",
    width: 21.33,
    height: 1.5,
  },
  groupView1: {
    position: "absolute",
    top: 154,
    left: 1654.33,
    width: 21.33,
    height: 19.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupView2: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 1080,
    display: "none",
  },
});

export default GroupScreen;
