import { Spinner, Center } from "@gluestack-ui/themed";
export function Loading(){

  return(
    <Center flex={1} backgroundColor='$colors$gray700'>
      <Spinner color="colors$green700"/>
    </Center>
  );
}