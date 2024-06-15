import { useTheme } from "@gluestack-style/react";
import {config} from '../../config/gluestack-ui.config'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Box } from "@gluestack-ui/themed";

export function Routes(){
  const { colors } = config.tokens;
  const theme = DefaultTheme;
  theme.colors.background = colors.gray700;

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes/>
      </NavigationContainer>
    </Box>
  )
}