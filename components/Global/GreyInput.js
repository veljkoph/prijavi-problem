import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { greyInputStyle } from "../../styles/global/greyInputStyle";

const GreyInput = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <View style={greyInputStyle.container}>
        <TouchableOpacity style={greyInputStyle.passwordToggle}>
          <Image source={props.icon} style={{ height: 25, aspectRatio: 1 }} />
        </TouchableOpacity>

        <TextInput
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          value={props.value}
          style={[greyInputStyle.field]}
          secureTextEntry={props.password && isHidden}
          onBlur={props.onBlur}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
        <Text style={greyInputStyle.label}>{props.label}</Text>
        {props.touched && props.error && (
          <Text style={greyInputStyle.errors}>{props.error}</Text>
        )}
      </View>
    </>
  );
};

export default GreyInput;
