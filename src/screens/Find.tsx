import { Heading, VStack } from 'native-base';

import { Input } from '@/components/Input';
import { Header } from '@/components/Header';

import { Button } from '@/components/Button';

export function Find() {
  return (
    <VStack flex="1" bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt="8" mx="5" alignItems="center">
        <Heading
          mb="8"
          color="white"
          fontSize="xl"
          textAlign="center"
          fontFamily="heading"
        >
          Encontre um bolão através de {'\n'} seu código único
        </Heading>

        <Input placeholder="Qual o código do bolão?" mb={4} />
        <Button title="Buscar bolão" type="SECONDARY" />
      </VStack>
    </VStack>
  );
}
