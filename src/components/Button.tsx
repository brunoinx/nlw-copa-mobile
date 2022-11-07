import { Button as ButtonNB, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <ButtonNB
      w="full"
      h={12}
      rounded="sm"
      fontSize={"md"}
      bg={type === "PRIMARY" ? "white" : "yellow.500"}
      _pressed={{
        opacity: "70",
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color="gray.950"
      >
        {title}
      </Text>
    </ButtonNB>
  );
}
