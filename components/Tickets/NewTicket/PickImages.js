import { View, Text } from "react-native";
import React from "react";

const PickImages = () => {
  return (
    <View>
      <Text style={createticketStyle.label}>DODAJ FOTOGRAFIJE</Text>
      <TouchableOpacity onPress={() => imageHandler(setImage)}>
        <Image
          resizeMode="contain"
          source={image ? { uri: image?.uri } : placeholder}
          style={createticketStyle.imgLarge}
        />
      </TouchableOpacity>
      <View style={createticketStyle.smallImgsWrapper}>
        <TouchableOpacity
          onPress={() => imageHandler(setImageSmall)}
          style={createticketStyle.imgSmallWrapper}
        >
          <Image
            resizeMode="contain"
            source={imageSmall ? { uri: imageSmall?.uri } : placeholder}
            style={createticketStyle.imgSmall}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => imageHandler(setImageSmall2)}
          style={createticketStyle.imgSmallWrapper}
        >
          <Image
            resizeMode="contain"
            source={imageSmall2 ? { uri: imageSmall2?.uri } : placeholder}
            style={createticketStyle.imgSmall}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickImages;
