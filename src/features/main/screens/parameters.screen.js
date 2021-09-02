import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import {
  MainBackground,
  Layer,
  MainButton,
  MainInput,
  Title,
} from "../components/main.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

export const ParametersScreen = ({ navigation }) => {
  // const { isLoading, setIsLoading } = useState(false);

  return (
    <SafeArea>
      <MainBackground>
        <Layer />
        <Title>What parameters of your goods?</Title>
        <MainInput
          label="Choose category"
          value=""
          // textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={() => {}}
        />
        <Spacer size="large">
          <MainInput
            label="Choose smth"
            value=""
            // textContentType="password"
            autoCapitalize="none"
            onChangeText={() => {}}
          />
        </Spacer>
        <Spacer size="large">
          <MainButton
            // icon="lock-open-outline"
            mode="contained"
            onPress={() => {}}
          >
            Next
          </MainButton>
        </Spacer>
      </MainBackground>
    </SafeArea>
  );
};
