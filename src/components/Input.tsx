import { Input as GluestackInput, InputField as  GluestackInputField} from "@gluestack-ui/themed";
import {TextInputProps } from "react-native";
export function Input({...rest} :TextInputProps){
  
  return (
    <GluestackInput
      variant="outline"
      size="md"
      bg="$gray700"
      h="$14"
      px='$4'
      borderWidth={0}
      mb='$4'
      $focus-borderWidth={1}
      $focus-borderColor="$green500"
      >
      <GluestackInputField color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...rest}/>
    </GluestackInput>
  );
}