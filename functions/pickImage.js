import * as ImagePicker from "expo-image-picker";

const pickImage = async () => {
  (async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }
  })();
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    aspect: [4, 3],
    quality: 0.5,
    base64: true,
  });

  if (!result.cancelled) {
    return {
      uri: result.uri,
      base64: result.base64,
    };
  }
  return;
};
export default pickImage;
