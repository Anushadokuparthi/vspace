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

const Product = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productView}>
      <View style={styles.frameView35}>
        <View style={styles.frameView34}>
          <View style={styles.frameView4}>
            <View style={styles.frameView2}>
              <View style={styles.frameView}>
                <Text style={styles.pemiumLivingRoom}>Pemium Living Room</Text>
              </View>
              <View style={styles.frameView1}>
                <View style={styles.chevronLeftView}>
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector18.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameView3, styles.ml131]}>
              <Text style={styles.p1234567Text}>#P1234567</Text>
            </View>
          </View>
          <View style={[styles.frameView13, styles.mt2]}>
            <View style={styles.frameView5}>
              <Text style={styles.woodenCenterTableWithWhite}>
                Wooden center table with white couch
              </Text>
            </View>
            <View style={[styles.frameView6, styles.mt4]}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group-12.png")}
              />
            </View>
            <View style={[styles.frameView12, styles.mt4]}>
              <View style={styles.frameView7}>
                <Image
                  style={styles.image18Icon}
                  resizeMode="cover"
                  source={require("../assets/image-18.png")}
                />
              </View>
              <View style={[styles.frameView8, styles.ml4]}>
                <Image
                  style={styles.image19Icon}
                  resizeMode="cover"
                  source={require("../assets/image-19.png")}
                />
              </View>
              <View style={[styles.frameView9, styles.ml4]}>
                <Image
                  style={styles.image20Icon}
                  resizeMode="cover"
                  source={require("../assets/image-20.png")}
                />
              </View>
              <View style={[styles.frameView10, styles.ml4]}>
                <Image
                  style={styles.image21Icon}
                  resizeMode="cover"
                  source={require("../assets/image-21.png")}
                />
              </View>
              <View style={[styles.frameView11, styles.ml4]}>
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group-13.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.frameView23, styles.mt2]}>
            <View style={styles.frameView14}>
              <Text style={styles.detailsText}>Details</Text>
            </View>
            <View style={styles.frameView22}>
              <View style={styles.frameView15}>
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.wideOpenWindowsForSunlight, styles.ml6]}>
                  Wide open windows for sunlight
                </Text>
              </View>
              <View style={[styles.frameView16, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon1}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.simpleAndCozySetupToEleva, styles.ml6]}>
                  Simple and cozy setup to elevate the center of the hall
                </Text>
              </View>
              <View style={[styles.frameView17, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon2}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.contemporaryWoodenTableWith, styles.ml6]}>
                  Contemporary wooden table with hidden space facility
                </Text>
              </View>
              <View style={[styles.frameView18, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon3}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.blackCeramicVasesToContras, styles.ml6]}>
                  Black ceramic vases to contrast the wooden table
                </Text>
              </View>
              <View style={[styles.frameView19, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon4}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.lightCreamCurtainsToMatch, styles.ml6]}>
                  Light cream curtains to match the whole living room
                </Text>
              </View>
              <View style={[styles.frameView20, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon5}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.goldFramedPaintingsToEleva, styles.ml5]}>
                  Gold framed paintings to elevate the walls behind the couch
                </Text>
              </View>
              <View style={[styles.frameView21, styles.mt7]}>
                <Image
                  style={styles.ellipseIcon6}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <Text style={[styles.softAndFluffyPillowsToMak, styles.ml6]}>
                  Soft and fluffy pillows to make you feel home
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView24, styles.mt2]}>
            <View style={styles.lineView} />
          </View>
          <View style={[styles.frameView25, styles.mt2]}>
            <View style={styles.groupView}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-726.png")}
              />
              <Image
                style={styles.image23Icon}
                resizeMode="cover"
                source={require("../assets/image-23.png")}
              />
              <Text style={styles.installationSetUpWaranty}>
                <Text
                  style={styles.installationSetUp}
                >{` Installation Set Up `}</Text>
                <Text
                  style={styles.warantyClaimsText}
                >{` & waranty claims`}</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.frameView30, styles.mt2]}>
            <View style={styles.frameView26}>
              <Image
                style={styles.ellipseIcon7}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.daysManPowerExcludingPubli, styles.ml6]}>
                5 days man power excluding public holidays and weekends
              </Text>
            </View>
            <View style={[styles.frameView27, styles.mt7]}>
              <Image
                style={styles.ellipseIcon8}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.anyProductDamagedDuringSet, styles.ml6]}>
                Any product damaged during setup will be refuded
              </Text>
            </View>
            <View style={[styles.frameView28, styles.mt7]}>
              <Image
                style={styles.ellipseIcon9}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.onceTheSetupWasInstalledT, styles.ml6]}>
                Once the setup was installed then not possible to change
              </Text>
            </View>
            <View style={[styles.frameView29, styles.mt7]}>
              <Image
                style={styles.ellipseIcon10}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Text style={[styles.helplineIsAvailableForAny, styles.ml6]}>
                24*7 helpline is available for any other queries
              </Text>
            </View>
          </View>
          <View style={[styles.frameView33, styles.mt2]}>
            <Pressable
              style={styles.framePressable}
              onPress={() => navigation.navigate("List")}
            >
              <View style={styles.backView}>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector19.png")}
                />
              </View>
              <View style={styles.frameView31}>
                <Text style={styles.backText}>Back</Text>
              </View>
            </Pressable>
            <View style={[styles.frameView32, styles.ml5]}>
              <Pressable
                style={styles.button17Variant3Pressable}
                onPress={() => navigation.navigate("Purchase")}
              >
                <View style={styles.rectangleView} />
                <View style={styles.buttonView}>
                  <Text style={styles.hoverMeText}>Get Now</Text>
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
  ml4: {
    marginLeft: 4,
  },
  mt4: {
    marginTop: 4,
  },
  ml6: {
    marginLeft: 6,
  },
  ml5: {
    marginLeft: 5,
  },
  mt7: {
    marginTop: 7,
  },
  mt2: {
    marginTop: 2,
  },
  pemiumLivingRoom: {
    position: "relative",
    fontSize: 12,
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
  },
  frameView1: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  p1234567Text: {
    position: "relative",
    fontSize: 10,
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
  woodenCenterTableWithWhite: {
    position: "relative",
    fontSize: 15,
    fontFamily: "Rubik",
    color: "#555",
    textAlign: "left",
  },
  frameView5: {
    width: 394,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon: {
    position: "relative",
    width: 404,
    height: 183,
    flexShrink: 0,
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image18Icon: {
    position: "relative",
    width: 53,
    height: 36,
    flexShrink: 0,
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image19Icon: {
    position: "relative",
    width: 54,
    height: 36,
    flexShrink: 0,
  },
  frameView8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image20Icon: {
    position: "relative",
    width: 61,
    height: 36,
    flexShrink: 0,
  },
  frameView9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image21Icon: {
    position: "relative",
    width: 51,
    height: 36,
    flexShrink: 0,
  },
  frameView10: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon1: {
    position: "relative",
    width: 56,
    height: 36,
    flexShrink: 0,
  },
  frameView11: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView12: {
    backgroundColor: "rgba(254, 241, 230, 0.4)",
    width: 393,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView13: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  detailsText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
  },
  frameView14: {
    flexDirection: "row",
    padding: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  wideOpenWindowsForSunlight: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView15: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon1: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  simpleAndCozySetupToEleva: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView16: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon2: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  contemporaryWoodenTableWith: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView17: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon3: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  blackCeramicVasesToContras: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon4: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  lightCreamCurtainsToMatch: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon5: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  goldFramedPaintingsToEleva: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView20: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon6: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  softAndFluffyPillowsToMak: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.8)",
    textAlign: "left",
  },
  frameView21: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView22: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView23: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
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
  frameView24: {
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 364,
    height: 77,
  },
  image23Icon: {
    position: "absolute",
    top: 5,
    left: 286,
    width: 65,
    height: 62,
  },
  installationSetUp: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  warantyClaimsText: {
    margin: 0,
  },
  installationSetUpWaranty: {
    position: "absolute",
    top: 17,
    left: 14,
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#bc4a3c",
    textAlign: "left",
    textShadowColor: "rgba(188, 74, 60, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 10,
  },
  groupView: {
    position: "relative",
    width: 364,
    height: 77,
    flexShrink: 0,
  },
  frameView25: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon7: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  daysManPowerExcludingPubli: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.7)",
    textAlign: "left",
  },
  frameView26: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon8: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  anyProductDamagedDuringSet: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.7)",
    textAlign: "left",
  },
  frameView27: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon9: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  onceTheSetupWasInstalledT: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.7)",
    textAlign: "left",
  },
  frameView28: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon10: {
    position: "relative",
    width: 5,
    height: 5,
    flexShrink: 0,
  },
  helplineIsAvailableForAny: {
    position: "relative",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Rubik",
    color: "rgba(85, 85, 85, 0.7)",
    textAlign: "left",
  },
  frameView29: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView30: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  frameView31: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  framePressable: {
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
    borderStyle: "solid",
    borderColor: "#bc4a3c",
    borderWidth: 1.2,
    position: "relative",
    width: 75,
    flexShrink: 0,
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
  frameView32: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView33: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView34: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView35: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  productView: {
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

export default Product;
