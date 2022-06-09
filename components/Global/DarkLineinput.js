import { View, Text, TextInput, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import { darkLineInputStyle } from "../../styles/global/darkLineInputStyle";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

const DarkLineInput = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <View style={darkLineInputStyle.container}>
        <Text style={darkLineInputStyle.label}>{props.label}</Text>
        {props.password && (
          <TouchableOpacity
            style={darkLineInputStyle.passwordToggle}
            onPress={() => setIsHidden(!isHidden)}
          >
            <Ionicons
              name={isHidden ? "eye-outline" : "eye-off-outline"}
              size={24}
              color={Colors.darkGrey}
            />
          </TouchableOpacity>
        )}

        <TextInput
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          value={props.value}
          style={darkLineInputStyle.field}
          secureTextEntry={props.password && isHidden}
          onBlur={props.onBlur}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
        {props.touched && props.error && (
          <Text style={darkLineInputStyle.errors}>{props.error}</Text>
        )}
      </View>
    </>
  );
};

export default DarkLineInput;
