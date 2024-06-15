import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Center, Heading, ImageBackground, ScrollView} from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
export function SignUp(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
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
              Cria sua conta
            </Heading>

            <Input 
              placeholder='Nome'
            />

            <Input 
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
            />

            <Input 
              placeholder='Senha'
              secureTextEntry  
            />

            <Button title='Criar e acessar'/>
          </Center>

          <Center mt='$24'>
            <Button 
              title='Voltar para o login' 
              variant='outline'
              onPress={handleGoBack}
            />
          </Center>
        </ImageBackground>
      </VStack>
    </ScrollView> 
  )
}