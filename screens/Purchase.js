import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryHeader from "../components/SecondaryHeader";
import Product1 from "../components/Product1";

const Purchase = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.purchaseView}>
      <View style={styles.frameView20}>
        <View style={styles.frameView19}>
          <SecondaryHeader
            pageTitle="Order Details"
            resultsFound="#PID-123456"
          />
          <View style={[styles.frameView3, styles.mt39]}>
            <View style={styles.frameView}>
              <Image
                style={styles.okIcon}
                resizeMode="cover"
                source={require("../assets/ok.png")}
              />
            </View>
            <View style={styles.frameView1}>
              <Text style={styles.congratulationsText}>Congratulations!!!</Text>
            </View>
            <View style={styles.frameView2}>
              <Text style={styles.youAreOneStepAheadToBuil}>
                <Text
                  style={styles.youAreOne}
                >{`You are one step ahead to build `}</Text>
                <Text style={styles.yourDreamHouse}>your dream house.</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.frameView4, styles.mt39]}>
            <Image
              style={styles.dashiconsarrowDown}
              resizeMode="cover"
              source={require("../assets/dashiconsarrowdown.png")}
            />
            <Text style={[styles.checkTheKitchenThemes, styles.ml1]}>
              Check the kitchen themes
            </Text>
          </View>
          <View style={[styles.frameView15, styles.mt39]}>
            <Pressable
              style={styles.framePressable}
              onPress={() => navigation.navigate("List")}
            >
              <Product1
                rectangle715={require("../assets/rectangle-715.png")}
                bigWallPaintingWithWindow="Big wall painting with windows"
                component="$ 3500"
                component1="$ 3150"
              />
            </Pressable>
            <View style={[styles.frameView14, styles.ml13]}>
              <View style={styles.productView}>
                <View style={styles.frameView7}>
                  <View style={styles.groupView}>
                    <Image
                      style={styles.rectangleIcon}
                      resizeMode="cover"
                      source={require("../assets/rectangle-7151.png")}
                    />
                    <View style={styles.frameView6}>
                      <View style={styles.frameView5}>
                        <Text style={styles.ftText}>4*4 ft</Text>
                      </View>
                      <View style={[styles.virtualRealityView, styles.ml118]}>
                        <Image
                          style={styles.vectorIcon}
                          resizeMode="cover"
                          source={require("../assets/vector1.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView13, styles.mt10]}>
                  <View style={styles.frameView8}>
                    <Text style={styles.bigWallPaintingWithWindows}>
                      Big wall painting with windows
                    </Text>
                  </View>
                  <View style={[styles.frameView9, styles.mt5]}>
                    <View style={styles.groupView1}>
                      <Text style={styles.text}>-</Text>
                      <Text style={styles.text1}>$ 3500</Text>
                      <Text style={styles.discountText}>10% discount</Text>
                    </View>
                  </View>
                  <View style={[styles.frameView12, styles.mt5]}>
                    <View style={styles.frameView10}>
                      <Text style={styles.text2}>$ 3150</Text>
                    </View>
                    <View style={[styles.frameView11, styles.ml42]}>
                      <Text style={styles.buyNowText}>Buy Now</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.mt39]} />
          <View style={[styles.frameView18, styles.mt39]}>
            <Pressable
              style={styles.framePressable1}
              onPress={() => navigation.navigate("Product")}
            >
              <View style={styles.backView}>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <View style={styles.frameView16}>
                <Text style={styles.backText}>Back</Text>
              </View>
            </Pressable>
            <View style={[styles.frameView17, styles.ml5]}>
              <Pressable
                style={styles.button17Variant3Pressable}
                onPress={() => navigation.navigate("List")}
              >
                <View style={styles.rectangleView} />
                <View style={styles.buttonView}>
                  <Text style={styles.hoverMeText}>Continue</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  ml166: {
    marginLeft: 166,
  },
  headerSafeAreaView: {
    backgroundColor: "#fef1e6",
  },
  ml1: {
    marginLeft: 1,
  },
  ml118: {
    marginLeft: 118,
  },
  ml42: {
    marginLeft: 42,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  ml13: {
    marginLeft: 13,
  },
  ml5: {
    marginLeft: 5,
  },
  mt39: {
    marginTop: 39,
  },
  okIcon: {
    position: "relative",
    width: 80,
    height: 80,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  congratulationsText: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  youAreOne: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourDreamHouse: {
    margin: 0,
  },
  youAreOneStepAheadToBuil: {
    position: "relative",
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#333",
    textAlign: "center",
  },
  frameView2: {
    width: 333,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dashiconsarrowDown: {
    position: "relative",
    width: 15,
    height: 15,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  checkTheKitchenThemes: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView4: {
    backgroundColor: "#fef1e6",
    width: 366,
    flexDirection: "row",
    paddingLeft: 28,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  framePressable: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView5: {
    backgroundColor: "#fef1e6",
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView: {
    shadowColor: "rgba(188, 74, 60, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    textDecoration: "line-through",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  discountText: {
    position: "absolute",
    top: 0,
    left: 46,
    fontSize: 10,
    textTransform: "lowercase",
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#88c88b",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView10: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView11: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView12: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(188, 74, 60, 0.25)",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView15: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#eee",
    borderTopWidth: 1,
    width: 365,
    height: 1,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 6.42,
    height: 11.08,
    flexShrink: 0,
  },
  backView: {
    alignSelf: "stretch",
    width: 27,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#555",
    textAlign: "left",
  },
  frameView16: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  framePressable1: {
    flex: 1,
    height: 37,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: -60,
    left: -22,
    borderRadius: 100,
    backgroundColor: "#bc4a3c",
    width: 125,
    height: 125,
    flexShrink: 0,
    zIndex: 0,
  },
  hoverMeText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  buttonView: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1.2,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  button17Variant3Pressable: {
    width: 92,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  frameView17: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView18: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView19: {
    height: 708,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView20: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  purchaseView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Purchase;
