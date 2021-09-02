import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDC_iclINCNQgOmiYunbMgiJ4oLUhHK51c",
  authDomain: "auth-react-native-ea436.firebaseapp.com",
  databaseURL: "https://auth-react-native-ea436-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-react-native-ea436",
  storageBucket: "auth-react-native-ea436.appspot.com",
  messagingSenderId: "306458376115",
  appId: "1:306458376115:web:0cafab1633c52f630d7dc6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}

