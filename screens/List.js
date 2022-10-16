import * as React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryHeader from "../components/SecondaryHeader";
import ProductItem from "../components/ProductItem";
import Product1 from "../components/Product1";

const List = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listView}>
      <View style={styles.frameView84}>
        <View style={styles.frameView83}>
          <SecondaryHeader
            pageTitle="Premium Living Room"
            resultsFound="10 results found"
          />
          <View style={[styles.frameView82, styles.mt14]}>
            <View style={styles.frameView1}>
              <Pressable
                style={styles.framePressable}
                onPress={() => navigation.navigate("Product")}
              >
                <ProductItem
                  ft="4*4 ft"
                  productName="Big wall painting with windows"
                  finalPrice="$ 3150"
                  discount="10% discount"
                  originalPrice="$ 3500"
                />
              </Pressable>
              <View style={[styles.frameView, styles.ml13]}>
                <Product1
                  rectangle715={require("../assets/rectangle-7152.png")}
                  bigWallPaintingWithWindow="Glass table and brown couch"
                  component="$ 4500"
                  component1="$ 4150"
                />
              </View>
            </View>
            <View style={[styles.frameView21, styles.mt14]}>
              <Pressable
                style={styles.framePressable1}
                onPress={() => navigation.navigate("Product")}
              >
                <View style={styles.productView}>
                  <View style={styles.frameView4}>
                    <View style={styles.groupView}>
                      <ImageBackground
                        style={styles.rectangleIcon}
                        resizeMode="cover"
                        source={require("../assets/rectangle7151.png")}
                      />
                      <View style={styles.frameView3}>
                        <View style={styles.frameView2}>
                          <Text style={styles.ftText}>4*4 ft</Text>
                        </View>
                        <View style={[styles.virtualRealityView, styles.ml118]}>
                          <Image
                            style={styles.vectorIcon}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView10, styles.mt10]}>
                    <View style={styles.frameView5}>
                      <Text style={styles.bigWallPaintingWithWindows}>
                        Ceramic and wooden theme
                      </Text>
                    </View>
                    <View style={[styles.frameView6, styles.mt5]}>
                      <View style={styles.groupView1}>
                        <Text style={styles.text}>-</Text>
                        <Text style={styles.text1}>$ 6500</Text>
                        <Text style={styles.discountText}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView9, styles.mt5]}>
                      <View style={styles.frameView7}>
                        <Text style={styles.text2}>$ 6150</Text>
                      </View>
                      <View style={[styles.frameView8, styles.ml42]}>
                        <Text style={styles.buyNowText}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.frameView20, styles.ml13]}>
                <View style={styles.productView1}>
                  <View style={styles.frameView13}>
                    <View style={styles.groupView2}>
                      <Image
                        style={styles.rectangleIcon1}
                        resizeMode="cover"
                        source={require("../assets/rectangle-7153.png")}
                      />
                      <View style={styles.frameView12}>
                        <View style={styles.frameView11}>
                          <Text style={styles.ftText1}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView1, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon1}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView19, styles.mt10]}>
                    <View style={styles.frameView14}>
                      <Text style={styles.bigWallPaintingWithWindows1}>
                        Spring theme setup with lamps
                      </Text>
                    </View>
                    <View style={[styles.frameView15, styles.mt5]}>
                      <View style={styles.groupView3}>
                        <Text style={styles.text3}>-</Text>
                        <Text style={styles.text4}>$ 7000</Text>
                        <Text style={styles.discountText1}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView18, styles.mt5]}>
                      <View style={styles.frameView16}>
                        <Text style={styles.text5}>$ 6300</Text>
                      </View>
                      <View style={[styles.frameView17, styles.ml42]}>
                        <Text style={styles.buyNowText1}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameView41, styles.mt14]}>
              <Pressable
                style={styles.framePressable2}
                onPress={() => navigation.navigate("Product")}
              >
                <View style={styles.productView2}>
                  <View style={styles.frameView24}>
                    <View style={styles.groupView4}>
                      <ImageBackground
                        style={styles.rectangleIcon2}
                        resizeMode="cover"
                        source={require("../assets/rectangle7152.png")}
                      />
                      <View style={styles.frameView23}>
                        <View style={styles.frameView22}>
                          <Text style={styles.ftText2}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView2, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon2}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView30, styles.mt10]}>
                    <View style={styles.frameView25}>
                      <Text style={styles.bigWallPaintingWithWindows2}>
                        Mirror wall with white couches
                      </Text>
                    </View>
                    <View style={[styles.frameView26, styles.mt5]}>
                      <View style={styles.groupView5}>
                        <Text style={styles.text6}>-</Text>
                        <Text style={styles.text7}>$ 6500</Text>
                        <Text style={styles.discountText2}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView29, styles.mt5]}>
                      <View style={styles.frameView27}>
                        <Text style={styles.text8}>$ 6150</Text>
                      </View>
                      <View style={[styles.frameView28, styles.ml42]}>
                        <Text style={styles.buyNowText2}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.frameView40, styles.ml13]}>
                <View style={styles.productView3}>
                  <View style={styles.frameView33}>
                    <View style={styles.groupView6}>
                      <Image
                        style={styles.rectangleIcon3}
                        resizeMode="cover"
                        source={require("../assets/rectangle-7154.png")}
                      />
                      <View style={styles.frameView32}>
                        <View style={styles.frameView31}>
                          <Text style={styles.ftText3}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView3, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon3}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView39, styles.mt10]}>
                    <View style={styles.frameView34}>
                      <Text style={styles.bigWallPaintingWithWindows3}>
                        Black and white theme
                      </Text>
                    </View>
                    <View style={[styles.frameView35, styles.mt5]}>
                      <View style={styles.groupView7}>
                        <Text style={styles.text9}>-</Text>
                        <Text style={styles.text10}>$4500</Text>
                        <Text style={styles.discountText3}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView38, styles.mt5]}>
                      <View style={styles.frameView36}>
                        <Text style={styles.text11}>$ 4150</Text>
                      </View>
                      <View style={[styles.frameView37, styles.ml42]}>
                        <Text style={styles.buyNowText3}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameView60, styles.mt14]}>
              <Pressable
                style={styles.framePressable3}
                onPress={() => navigation.navigate("Product")}
              >
                <View style={styles.productView4}>
                  <View style={styles.frameView44}>
                    <View style={styles.groupView8}>
                      <ImageBackground
                        style={styles.rectangleIcon4}
                        resizeMode="cover"
                        source={require("../assets/rectangle7153.png")}
                      />
                      <View style={styles.frameView43}>
                        <View style={styles.frameView42}>
                          <Text style={styles.ftText4}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView4, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon4}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView50, styles.mt10]}>
                    <View style={styles.frameView45}>
                      <Text style={styles.bigWallPaintingWithWindows4}>
                        Navy blue with contrast sofa
                      </Text>
                    </View>
                    <View style={[styles.frameView46, styles.mt5]}>
                      <View style={styles.groupView9}>
                        <Text style={styles.text12}>-</Text>
                        <Text style={styles.text13}>$ 9500</Text>
                        <Text style={styles.discountText4}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView49, styles.mt5]}>
                      <View style={styles.frameView47}>
                        <Text style={styles.text14}>$ 9150</Text>
                      </View>
                      <View style={[styles.frameView48, styles.ml42]}>
                        <Text style={styles.buyNowText4}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.frameView59, styles.ml13]}>
                <View style={styles.productView5}>
                  <ImageBackground
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require("../assets/frame112.png")}
                  >
                    <View style={styles.groupView10}>
                      <Image
                        style={styles.rectangleIcon5}
                        resizeMode="cover"
                        source={require("../assets/rectangle-7155.png")}
                      />
                      <View style={styles.frameView52}>
                        <View style={styles.frameView51}>
                          <Text style={styles.ftText5}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView5, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon5}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                  <View style={[styles.frameView58, styles.mt10]}>
                    <View style={styles.frameView53}>
                      <Text style={styles.bigWallPaintingWithWindows5}>
                        Ancient window theme
                      </Text>
                    </View>
                    <View style={[styles.frameView54, styles.mt5]}>
                      <View style={styles.groupView11}>
                        <Text style={styles.text15}>-</Text>
                        <Text style={styles.text16}>$ 8500</Text>
                        <Text style={styles.discountText5}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView57, styles.mt5]}>
                      <View style={styles.frameView55}>
                        <Text style={styles.text17}>$ 8150</Text>
                      </View>
                      <View style={[styles.frameView56, styles.ml42]}>
                        <Text style={styles.buyNowText5}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameView81, styles.mt14]}>
              <View style={styles.frameView70}>
                <View style={styles.productView6}>
                  <View style={styles.frameView63}>
                    <View style={styles.groupView12}>
                      <Image
                        style={styles.rectangleIcon6}
                        resizeMode="cover"
                        source={require("../assets/rectangle-7156.png")}
                      />
                      <View style={styles.frameView62}>
                        <View style={styles.frameView61}>
                          <Text style={styles.ftText6}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView6, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon6}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView69, styles.mt10]}>
                    <View style={styles.frameView64}>
                      <Text style={styles.bigWallPaintingWithWindows6}>
                        Wooden texture walls with sofas
                      </Text>
                    </View>
                    <View style={[styles.frameView65, styles.mt5]}>
                      <View style={styles.groupView13}>
                        <Text style={styles.text18}>-</Text>
                        <Text style={styles.text19}>$ 6500</Text>
                        <Text style={styles.discountText6}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView68, styles.mt5]}>
                      <View style={styles.frameView66}>
                        <Text style={styles.text20}>$ 6150</Text>
                      </View>
                      <View style={[styles.frameView67, styles.ml42]}>
                        <Text style={styles.buyNowText6}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.frameView80, styles.ml13]}>
                <View style={styles.productView7}>
                  <View style={styles.frameView73}>
                    <View style={styles.groupView14}>
                      <Image
                        style={styles.rectangleIcon7}
                        resizeMode="cover"
                        source={require("../assets/rectangle-7157.png")}
                      />
                      <View style={styles.frameView72}>
                        <View style={styles.frameView71}>
                          <Text style={styles.ftText7}>4*4 ft</Text>
                        </View>
                        <View
                          style={[styles.virtualRealityView7, styles.ml118]}
                        >
                          <Image
                            style={styles.vectorIcon7}
                            resizeMode="cover"
                            source={require("../assets/vector15.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frameView79, styles.mt10]}>
                    <View style={styles.frameView74}>
                      <Text style={styles.bigWallPaintingWithWindows7}>
                        Green couch with artistic paintings
                      </Text>
                    </View>
                    <View style={[styles.frameView75, styles.mt5]}>
                      <View style={styles.groupView15}>
                        <Text style={styles.text21}>-</Text>
                        <Text style={styles.text22}>$ 7500</Text>
                        <Text style={styles.discountText7}>10% discount</Text>
                      </View>
                    </View>
                    <View style={[styles.frameView78, styles.mt5]}>
                      <View style={styles.frameView76}>
                        <Text style={styles.text23}>$ 7150</Text>
                      </View>
                      <View style={[styles.frameView77, styles.ml42]}>
                        <Text style={styles.buyNowText7}>Buy Now</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
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
  ml13: {
    marginLeft: 13,
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
  mt14: {
    marginTop: 14,
  },
  framePressable: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
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
  frameView2: {
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
  frameView3: {
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
  frameView4: {
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
  frameView5: {
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
  frameView6: {
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
  frameView7: {
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
  frameView8: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView9: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView10: {
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
  framePressable1: {
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
  frameView11: {
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
  frameView12: {
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
  frameView13: {
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
  frameView14: {
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
  frameView15: {
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
  frameView16: {
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
  frameView17: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView18: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView19: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView1: {
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
  frameView20: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView21: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText2: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView22: {
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
  virtualRealityView2: {
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
  frameView23: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView4: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView24: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows2: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView25: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text6: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text7: {
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
  discountText2: {
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
  groupView5: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView26: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text8: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView27: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView28: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView29: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView30: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView2: {
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
  framePressable2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText3: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView31: {
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
  vectorIcon3: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView3: {
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
  frameView32: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView6: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView33: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows3: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView34: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text9: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text10: {
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
  discountText3: {
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
  groupView7: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView35: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text11: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView36: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText3: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView37: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView38: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView39: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView3: {
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
  frameView40: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView41: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText4: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView42: {
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
  vectorIcon4: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView4: {
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
  frameView43: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView8: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView44: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows4: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView45: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text12: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text13: {
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
  discountText4: {
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
  groupView9: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView46: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text14: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView47: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText4: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView48: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView49: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView50: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView4: {
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
  framePressable3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText5: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView51: {
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
  vectorIcon5: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView5: {
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
  frameView52: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView10: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameIcon: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows5: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView53: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text15: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text16: {
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
  discountText5: {
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
  groupView11: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView54: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text17: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView55: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText5: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView56: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView57: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView58: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView5: {
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
  frameView59: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView60: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText6: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView61: {
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
  vectorIcon6: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView6: {
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
  frameView62: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView12: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView63: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows6: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView64: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text18: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text19: {
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
  discountText6: {
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
  groupView13: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView65: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text20: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView66: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText6: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView67: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView68: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView69: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView6: {
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
  frameView70: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    height: 133,
  },
  ftText7: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView71: {
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
  vectorIcon7: {
    position: "relative",
    width: 12.88,
    height: 9.52,
    flexShrink: 0,
  },
  virtualRealityView7: {
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
  frameView72: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView14: {
    position: "relative",
    width: 175,
    height: 133,
    flexShrink: 0,
  },
  frameView73: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bigWallPaintingWithWindows7: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView74: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text21: {
    position: "absolute",
    top: 0,
    left: 35,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "#ccc",
    textAlign: "left",
  },
  text22: {
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
  discountText7: {
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
  groupView15: {
    position: "relative",
    width: 106,
    height: 12,
    flexShrink: 0,
  },
  frameView75: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text23: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView76: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buyNowText7: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView77: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView78: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView79: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView7: {
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
  frameView80: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView81: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView82: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView83: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView84: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default List;
