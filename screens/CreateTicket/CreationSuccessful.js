import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { creationSuccsessfulStyle } from "../../styles/createTicket/creationSuccsessful";
import { useNavigation } from "@react-navigation/native";
import { globalStyle } from "../../styles/global/globalStyle";

const CreationSuccessful = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={creationSuccsessfulStyle.container}>
      <View style={creationSuccsessfulStyle.header}>
        <Image
          style={creationSuccsessfulStyle.dotsLeft}
          source={require("../../assets/twoDots.png")}
        />
        <View>
          <Text style={creationSuccsessfulStyle.title}>PROBLEM</Text>
          <Text style={creationSuccsessfulStyle.title}>JE PRIJAVLJEN</Text>
          <View style={creationSuccsessfulStyle.line} />
        </View>

        <Image
          style={creationSuccsessfulStyle.dotsRight}
          source={require("../../assets/dots.png")}
        />
      </View>
      <Text style={creationSuccsessfulStyle.description}>
        Dragi korisniče, {"\n"} Uspešno ste prijavili problem gradskoj upravi, i
        time doprineli
        <Text style={creationSuccsessfulStyle.descriptionBlue}>
          {" "}
          čistijem i uređenijem{" "}
        </Text>
        gradu. {"\n"} Vaša prijava se obrađuje.
        {"\n"}
        Uskoro će Vas kontaktirati odgovorno lice.
      </Text>
      <Image
        style={creationSuccsessfulStyle.banner}
        source={require("../../assets/images/people.png")}
      />
      <View style={globalStyle.rowSpaceAround}>
        <TouchableOpacity
          style={globalStyle.cancelBtn}
          onPress={() => navigation.navigate("CreateTicketScreen")}
        >
          <Text style={globalStyle.cancelBtnText}>Nova prijava</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyle.ctaBtn}
          onPress={() => navigation.navigate("Tickets")}
        >
          <Text style={globalStyle.ctaBtnText}>Prikaži prijave</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreationSuccessful;
