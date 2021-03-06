import React from "react";
import { StyleSheet } from "react-native";
import RNButton from "react-native-button";
import Colors from "../../../constants/Colors";

import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

// Responsive percents
const FONT_SIZE = 1.8;
const BUTTON_HEIGHT = 1.5;

const containerStyles = StyleSheet.create({
  disabled: {
    backgroundColor: Colors.disabledButtonBackground,
    borderRadius: 3,
    overflow: "hidden",
    padding: responsiveHeight(BUTTON_HEIGHT),
  },
  enabled: {
    backgroundColor: Colors.buttonBackground,
    borderRadius: 3,
    overflow: "hidden",
    padding: responsiveHeight(BUTTON_HEIGHT),
  },
});

const buttonStyles = StyleSheet.create({
  disabled: {
    color: Colors.disabledButtonTextColor,
    fontSize: responsiveFontSize(FONT_SIZE),
  },
  enabled: {
    color: Colors.buttonTextColor,
    fontSize: responsiveFontSize(FONT_SIZE),
  },
});

// TODO: Change to NativeBase button component
// https://github.com/tasitlabs/tasit/issues/204

interface ButtonProps {
  title: string;
  onPress: (...args: any[]) => any;
  disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = React.memo(props => {
  let { title, disabled } = props;
  const { onPress } = props;
  if (disabled === undefined) disabled = false;

  const onPressHandler = disabled ? (): void => {} : onPress;

  title = title.toUpperCase();

  return (
    <RNButton
      containerStyle={
        disabled ? containerStyles.disabled : containerStyles.enabled
      }
      style={disabled ? buttonStyles.disabled : buttonStyles.enabled}
      onPress={onPressHandler}
      activeOpacity={1}
    >
      {title}
    </RNButton>
  );
});

export default Button;
