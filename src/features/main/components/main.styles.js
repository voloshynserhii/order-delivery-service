import styled from "styled-components/native";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const MainBackground = styled.ImageBackground.attrs({
  // source: require("../../../../assets/splash.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
`;

export const Layer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const MainContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  padding-bottom: 50px;
`;

export const MainButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 300px;
`;

export const MainInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  text-align: center;
  margin: 30px 0;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

