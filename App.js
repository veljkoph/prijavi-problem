import {
  Alert,
  StatusBar,
  ActivityIndicator,
  View,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { UserProvider } from "./context/UserContext";
import Navigation from "./navigation/Navigation";
import { useEffect, useState, useRef } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "react-query";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {
  //reat query
  const queryClient = new QueryClient();
  //internet handling
  const netinfo = useNetInfo();
  //font loading
  const [loaded] = useFonts({
    "Lato-Light": require("./assets/font/Lato-Light.ttf"),
    "Lato-LightItalic": require("./assets/font/Lato-LightItalic.ttf"),
    "Lato-Italic": require("./assets/font/Lato-Italic.ttf"),
    "Lato-Regular": require("./assets/font/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/font/Lato-Bold.ttf"),
    "Montserrat-Light": require("./assets/font/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/font/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/font/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/font/Montserrat-Bold.ttf"),
  });
  //App loading splash screen hide
  const [appIsReady, setAppIsReady] = useState(true);
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.hideAsync();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  useEffect(() => {
    const hideScreen = async () => {
      await SplashScreen.hideAsync();
    };
    if (appIsReady) {
      hideScreen();
    }
  }, [appIsReady]);

  ///notifications
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert("Obaveštenje", "Push obaveštenja isključena");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Na ovom uređaju nisu dostupne notifikacije");
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
  useEffect(() => {
    const handleToken = async () => {
      const token = await registerForPushNotificationsAsync();
      await AsyncStorage.setItem("push_token", token);
    };
    if (Device.isDevice) {
      handleToken();
      // This listener is fired whenever a notification is received while the app is foregrounded
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {});

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }
  }, []);
  if (!appIsReady) {
    return <ActivityIndicator />;
  }
  if (!loaded) return null;
  // if (!netinfo?.isInternetReachable) return <NoInternet />;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent />
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </UserProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
