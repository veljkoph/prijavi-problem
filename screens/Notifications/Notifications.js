import { View, Text, RefreshControl, FlatList } from "react-native";
import React from "react";
import useNotifications from "../../hooks/notifications/useNotifications";
import Notification from "../../components/Notifications/Notification";
import { globalStyle } from "../../styles/global/globalStyle";
import NoNotifications from "../../components/Notifications/NoNotifications";
import DotLoader from "../../components/Animations/DotLoader";
import Header from "../../components/Notifications/Header";

const Notifications = () => {
  const {
    data: notifications,
    isError,
    isLoading,
    refetch,
  } = useNotifications();

  return (
    <View style={globalStyle.whiteBg}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={!isLoading ? <NoNotifications /> : <DotLoader />}
        ListHeaderComponentStyle={{
          paddingVertical: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 24,
          paddingHorizontal: 20,
          paddingTop: 90,
          backgroundColor: "#Fff",
          flex: 1,
        }}
        onEndReachedThreshold={0}
        data={notifications}
        renderItem={({ item }) => <Notification key={item?.id} n={item} />}
      />
    </View>
  );
};

export default Notifications;
