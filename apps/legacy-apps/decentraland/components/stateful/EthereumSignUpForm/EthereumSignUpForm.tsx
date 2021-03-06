import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Colors from "../../../constants/Colors";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import Button from "../../presentational/Button";

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    marginTop: responsiveHeight(5),
  },
  userInput: {
    backgroundColor: Colors.formBackground,
    color: Colors.textColor,
    fontSize: responsiveFontSize(3),
    justifyContent: "flex-start",
    width: responsiveWidth(48),
  },
  userInputView: { alignItems: "center", flex: 1 },
  userRow: { flexDirection: "row" },
});

interface EthereumSignUpFormProps {
  onUsernameSubmit: () => void;
}

const EthereumSignUpForm: React.FunctionComponent<EthereumSignUpFormProps> = ({
  onUsernameSubmit,
}) => {
  const [username, setUsername] = useState("");

  return (
    <React.Fragment>
      <View style={styles.userRow}>
        <View style={styles.userInputView}>
          <UsernameTextInput onChange={setUsername} username={username} />
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button title="Continue" onPress={onUsernameSubmit} />
      </View>
    </React.Fragment>
  );
};

export default EthereumSignUpForm;

interface UsernameTextInputProps {
  onChange: (...args: any[]) => any;
  username: string;
}

export const UsernameTextInput: React.FunctionComponent<UsernameTextInputProps> = ({
  onChange,
  username,
}) => {
  return (
    <TextInput
      autoCorrect={false}
      autoFocus={true}
      autoCapitalize="none"
      style={styles.userInput}
      onChangeText={onChange}
      value={username}
      placeholder="username"
      placeholderTextColor={Colors.placeholderTextColor}
      selectionColor={Colors.selection}
      keyboardAppearance="dark"
    />
  );
};
