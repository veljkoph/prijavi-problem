import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { textAreaStyle } from "../../styles/global/textAreaStyle";

const TextArea = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <View style={textAreaStyle.container}>
        {props.password && (
          <TouchableOpacity
            style={textAreaStyle.passwordToggle}
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
          style={[textAreaStyle.field]}
          secureTextEntry={props.password && isHidden}
          onBlur={props.onBlur}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
        <Text style={textAreaStyle.label}>{props.label}</Text>
        {props.touched && props.error && (
          <Text style={textAreaStyle.errors}>{props.error}</Text>
        )}
      </View>
    </>
  );
};

export default TextArea;
