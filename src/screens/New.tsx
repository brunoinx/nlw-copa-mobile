import { Heading, Text, VStack } from 'native-base';

import { Input } from '@/components/Input';
import { Header } from '@/components/Header';

import Logo from '@/assets/logo.svg';
import { Button } from '@/components/Button';

export function New() {
  return (
    <VStack flex="1" bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt="8" mx="5" alignItems="center">
        <Logo />

        <Heading
          my="8"
          color="white"
          fontSize="xl"
          textAlign="center"
          fontFamily="heading"
        >
          Crie seu próprio bolão da copa {'\n'} e compartilhe entre amigos!
        </Heading>

        <Input placeholder="Qual o nome do seu bolão?" mb={4} />
        <Button title="Criar meu bolão" />

        <Text color="gray.200" fontSize="sm" textAlign="center" px="2" mt="4">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
