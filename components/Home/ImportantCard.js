import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { importantCardStyle } from "../../styles/home/importantCardStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import useLastNews from "../../hooks/home/useLastNews";

const ImportantCard = () => {
  const navigation = useNavigation();
  const { data: news, isError, isLoading } = useLastNews();
  if (isError) return null;
  return (
    <TouchableOpacity
      style={importantCardStyle.container}
      onPress={() =>
        navigation.navigate("InformationsStack", {
          screen: "Information",
          params: { id: news?.id },
        })
      }
    >
      <View>
        <View style={importantCardStyle.upperContainer}>
          <Text style={importantCardStyle.title}>VAŽNO</Text>

          <Ionicons color={Colors.orange} name="information-circle" size={25} />
        </View>
        <View style={importantCardStyle.line} />
        <Text style={importantCardStyle.date}>{news?.created_at}</Text>
        <Text style={importantCardStyle.newsTitle}>{news?.title}</Text>

        <Text style={importantCardStyle.desc}>{news?.short_text}</Text>
      </View>

      <Text style={importantCardStyle.showMore}>
        SAZNAJTE VIŠE &gt; &gt; &gt;{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default ImportantCard;
