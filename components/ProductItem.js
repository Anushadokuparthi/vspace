import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const ProductItem = ({
  ft = "4*4 ft",
  productName = "Big wall painting with windows",
  finalPrice = "$ 3150",
  discount = "10% discount",
  originalPrice = "$ 3500",
}) => {
  return (
    <View style={styles.productView}>
      <View style={styles.frameView2}>
        <View style={styles.groupView}>
          <ImageBackground
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle715.png")}
          />
          <View style={styles.frameView1}>
            <View style={styles.frameView}>
              <Text style={styles.ftText}>{ft}</Text>
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
      <View style={[styles.frameView8, styles.mt10]}>
        <View style={styles.frameView3}>
          <Text style={styles.bigWallPaintingWithWindows}>{productName}</Text>
        </View>
        <View style={[styles.frameView4, styles.mt5]}>
          <View style={styles.groupView1}>
            <Text style={styles.text}>-</Text>
            <Text style={styles.text1}>{originalPrice}</Text>
            <Text style={styles.discountText}>{discount}</Text>
          </View>
        </View>
        <View style={[styles.frameView7, styles.mt5]}>
          <View style={styles.frameView5}>
            <Text style={styles.text2}>{finalPrice}</Text>
          </View>
          <View style={[styles.frameView6, styles.ml42]}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  frameView: {
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
  frameView1: {
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
  frameView2: {
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
  frameView3: {
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
  frameView4: {
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
  frameView5: {
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
  frameView6: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView7: {
    width: 157,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView8: {
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
});

export default ProductItem;
