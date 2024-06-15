import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Center, Heading, ImageBackground, ScrollView} from '@gluestack-ui/themed';

import { AuthNavigationRoutesProps } from '@routes/auth.routes'

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
export function SignIn(){

  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}> 
        <ImageBackground source={BackgroundImg} resizeMode='cover' flex={1} px="$10" pb='$16'>
          
          <Center my='$24'>
            <LogoSvg />

            <Text color='$gray100'>
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center>
            <Heading color='$gray100' fontSize='$xl' mb='$6' fontFamily='$heading'>
              Acesse sua conta
            </Heading>

            <Input 
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              />

            <Input 
              placeholder='Senha'
              secureTextEntry  
            />

            <Button title='Acessar'/>
          </Center>

          <Center mt='$24'>
            <Text color='$gray100' fontSize='$sm' mb='$3' fontFamily='$body'>
              Ainda não tem acesso? 
            </Text>

            <Button 
              title='Criar conta' 
              variant='outline'
              onPress={handleNewAccount}
            />
          </Center>
        </ImageBackground>
      </VStack>
    </ScrollView> 
  )
}