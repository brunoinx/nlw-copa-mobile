import { Center, Box, Flex, Text } from "native-base";

import Logo from "@/assets/logo.svg";
import GoogleIcon from "@/assets/icons/google.svg";

import { Button } from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";

export function SignIn() {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bg="gray.900">
      <Flex w="4/5" alignItems="center" mt="8">
        <Box mb="12">
          <Logo width={212} height={40} />
        </Box>

        <Button
          title="Continuar com o google"
          rounded={"3xl"}
          leftIcon={<GoogleIcon height={32} />}
          onPress={signIn}
        />

        <Text color="gray.300" lineHeight="lg" mt="7" textAlign="center">
          Não utilizamos nenhuma informação além {"\n"}
          do seu e-mail para criação de sua conta.
        </Text>
      </Flex>
    </Center>
  );
}
