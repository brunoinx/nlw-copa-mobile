import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { New } from '@/screens/New';
import { Find } from '@/screens/Find';
import { Loading } from '@/components/Loading';
import { AuthContextProvider } from '@/contexts/auth';

import { THEME } from '@/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <AuthContextProvider>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor="transparent"
            translucent
          />

          <Find />
        </AuthContextProvider>
      )}
    </NativeBaseProvider>
  );
}
