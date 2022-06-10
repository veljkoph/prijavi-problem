import { ScrollView } from "react-native";
import React from "react";
import { settingsStyle } from "../../styles/settings/settingsStyle";
import SettingsItem from "../../components/Settings/SettingsItem";
import { alertPrompt } from "../../functions/alertPrompt";
import useAuth from "../../hooks/useAuth";

const Settings = ({ navigation }) => {
  const { logout } = useAuth();
  return (
    <ScrollView style={settingsStyle.container}>
      <SettingsItem
        title="Profil"
        icon="person-circle-outline"
        fj={() => navigation.navigate("Profile")}
      />
      <SettingsItem title="O Nama" icon="business-outline" />
      <SettingsItem
        title="Odjavi se"
        icon="exit-outline"
        fj={() => alertPrompt(logout)}
      />
    </ScrollView>
  );
};

export default Settings;
