import { View, Text, RefreshControl, FlatList } from "react-native";
import React from "react";
import useNotifications from "../../hooks/notifications/useNotifications";
import Notification from "../../components/Notifications/Notification";
import { globalStyle } from "../../styles/global/globalStyle";

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
        // ListEmptyComponent={
        //   !isLoading ? (
        //     <Empty text="Još uvek nema prijava, novu prijavu možete dodati klikom na prijavi problem" />
        //   ) : (
        //     <DotLoader />
        //   )
        // }
        ListHeaderComponentStyle={{
          paddingVertical: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 24,
          paddingHorizontal: 20,
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
