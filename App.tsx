import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { SignIn } from "@/screens/SignIn";
import { Loading } from "@/components/Loading";
import { AuthContextProvider } from "@/contexts/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
        />
        {!fontsLoaded ? <Loading /> : <SignIn />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
