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

const Purchase = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.purchaseView}>
      <View style={styles.frameView34}>
        <View style={styles.frameView33}>
          <View style={styles.frameView4}>
            <View style={styles.frameView2}>
              <View style={styles.frameView}>
                <Text style={styles.orderDetailsText}>Order Details</Text>
              </View>
              <View style={styles.frameView1}>
                <View style={styles.chevronLeftView}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameView3, styles.ml131]}>
              <Text style={styles.pID123456Text}>#PID-123456</Text>
            </View>
          </View>
          <View style={[styles.frameView8, styles.mt39]}>
            <View style={styles.frameView5}>
              <Image
                style={styles.okIcon}
                resizeMode="cover"
                source={require("../assets/ok.png")}
              />
            </View>
            <View style={styles.frameView6}>
              <Text style={styles.congratulationsText}>Congratulations!!!</Text>
            </View>
            <View style={styles.frameView7}>
              <Text style={styles.youAreOneStepAheadToBuil}>
                <Text
                  style={styles.youAreOne}
                >{`You are one step ahead to build `}</Text>
                <Text style={styles.yourDreamHouse}>your dream house.</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.frameView9, styles.mt39]}>
            <Image
              style={styles.dashiconsarrowDown}
              resizeMode="cover"
              source={require("../assets/dashiconsarrowdown.png")}
            />
            <Text style={[styles.similarProductsText, styles.ml1]}>
              Similar Products
            </Text>
          </View>
          <View style={[styles.frameView29, styles.mt39]}>
            <Pressable
              style={styles.framePressable}
              onPress={() => navigation.navigate("List")}
            >
              <View style={styles.productView}>
                <View style={styles.frameView12}>
                  <View style={styles.groupView}>
                    <Image
                      style={styles.rectangleIcon}
                      resizeMode="cover"
                      source={require("../assets/rectangle-715.png")}
                    />
                    <View style={styles.frameView11}>
                      <View style={styles.frameView10}>
                        <Text style={styles.ftText}>4*4 ft</Text>
                      </View>
                      <View style={[styles.virtualRealityView, styles.ml118]}>
                        <Image
                          style={styles.vectorIcon1}
                          resizeMode="cover"
                          source={require("../assets/vector1.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView18, styles.mt10]}>
                  <View style={styles.frameView13}>
                    <Text style={styles.bigWallPaintingWithWindows}>
                      Big wall painting with windows
                    </Text>
                  </View>
                  <View style={[styles.frameView14, styles.mt5]}>
                    <View style={styles.groupView1}>
                      <Text style={styles.text}>-</Text>
                      <Text style={styles.text1}>$ 3500</Text>
                      <Text style={styles.discountText}>10% discount</Text>
                    </View>
                  </View>
                  <View style={[styles.frameView17, styles.mt5]}>
                    <View style={styles.frameView15}>
                      <Text style={styles.text2}>$ 3150</Text>
                    </View>
                    <View style={[styles.frameView16, styles.ml42]}>
                      <Text style={styles.buyNowText}>Buy Now</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
            <View style={[styles.frameView28, styles.ml13]}>
              <View style={styles.productView1}>
                <View style={styles.frameView21}>
                  <View style={styles.groupView2}>
                    <Image
                      style={styles.rectangleIcon1}
                      resizeMode="cover"
                      source={require("../assets/rectangle-715.png")}
                    />
                    <View style={styles.frameView20}>
                      <View style={styles.frameView19}>
                        <Text style={styles.ftText1}>4*4 ft</Text>
                      </View>
                      <View style={[styles.virtualRealityView1, styles.ml118]}>
                        <Image
                          style={styles.vectorIcon2}
                          resizeMode="cover"
                          source={require("../assets/vector1.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameView27, styles.mt10]}>
                  <View style={styles.frameView22}>
                    <Text style={styles.bigWallPaintingWithWindows1}>
                      Big wall painting with windows
                    </Text>
                  </View>
                  <View style={[styles.frameView23, styles.mt5]}>
                    <View style={styles.groupView3}>
                      <Text style={styles.text3}>-</Text>
                      <Text style={styles.text4}>$ 3500</Text>
                      <Text style={styles.discountText1}>10% discount</Text>
                    </View>
                  </View>
                  <View style={[styles.frameView26, styles.mt5]}>
                    <View style={styles.frameView24}>
                      <Text style={styles.text5}>$ 3150</Text>
                    </View>
                    <View style={[styles.frameView25, styles.ml42]}>
                      <Text style={styles.buyNowText1}>Buy Now</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.mt39]} />
          <View style={[styles.frameView32, styles.mt39]}>
            <Pressable
              style={styles.framePressable1}
              onPress={() => navigation.navigate("Product")}
            >
              <View style={styles.backView}>
                <Image
                  style={styles.vectorIcon3}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <View style={styles.frameView30}>
                <Text style={styles.backText}>Back</Text>
              </View>
            </Pressable>
            <View style={[styles.frameView31, styles.ml5]}>
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
  ml131: {
    marginLeft: 131,
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
  orderDetailsText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "relative",
    width: 7.58,
    height: 10.83,
    flexShrink: 0,
  },
  chevronLeftView: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView1: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  pID123456Text: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView3: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView4: {
    backgroundColor: "rgba(204, 204, 204, 0.1)",
    width: 393,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  okIcon: {
    position: "relative",
    width: 80,
    height: 80,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView5: {
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
  frameView6: {
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
  frameView7: {
    width: 333,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView8: {
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
  similarProductsText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
    width: 105,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  frameView9: {
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
  frameView10: {
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
  vectorIcon1: {
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
  frameView11: {
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
  frameView12: {
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
  frameView13: {
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
  frameView14: {
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
  frameView15: {
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
  frameView16: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView17: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView18: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  framePressable: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView19: {
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
  vectorIcon2: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView1: {
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
  frameView20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView2: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView21: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView22: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text4: {
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
  discountText1: {
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
  groupView3: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView23: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView24: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText1: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView25: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView26: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView27: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView1: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fef1e6",
    borderWidth: 1,
    position: "relative",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView28: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView29: {
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
  vectorIcon3: {
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
  frameView30: {
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
  frameView31: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView32: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView33: {
    height: 708,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView34: {
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
