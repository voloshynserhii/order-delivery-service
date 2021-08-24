import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const MainScreen = ({ navigation }) => {
  const { isLoading, setIsLoading } = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.brand.primary} />
        </LoadingContainer>
      )}

    </SafeArea>
  );
};
