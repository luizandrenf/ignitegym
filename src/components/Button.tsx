import { Button as GluestackButton, ButtonText as GluestackButtonText} from '@gluestack-ui/themed'

import { PressableProps } from 'react-native';

type Props = PressableProps & {
  title: string;
  variant?: 'outline' | 'solid';
};
export function Button({ title, variant='solid', ...rest} : Props){

  return (
    <GluestackButton
      w='$full'
      h="$14"
      bg={variant === 'outline' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor='$green500'
      rounded="$sm"
      $pressed-bgColor={variant === 'outline' ? '$gray500' : '$green500'}
      {...rest}
    >
      <GluestackButtonText 
        color={variant === 'outline' ? '$green500' : '$white'} 
        fontFamily='$heading' 
        fontSize="$sm"
        >
        {title}
      </GluestackButtonText>
    </GluestackButton>
  );
}