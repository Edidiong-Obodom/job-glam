import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return <Stack />;
};

export default Layout;

// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import {useEffect} from 'react';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//  const [loaded, error] = useFonts({
//    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
//  });

//  useEffect(() => {
//    if (loaded || error) {
//      SplashScreen.hideAsync();
//    }
//  }, [loaded, error]);

//  if (!loaded && !error) {
//    return null;
//  }

//  return (
//  )
// }
