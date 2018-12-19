import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Land from "./Land";

export default function LandRow(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.row}>
        <Land land={props.land} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "center",
  },
});
