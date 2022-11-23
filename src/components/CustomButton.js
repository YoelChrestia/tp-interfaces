import { Button } from "@chakra-ui/react";
import { sizes, boxShadow } from "../theme/theme";
import { Link } from "wouter";

const CustomButton = ({ bgColor, link, texto, color, width }) => {
  return (
    <Link href={link}>
      <Button
        type="submit"
        w={width}
        h={"40px"}
        bgColor={bgColor}
        fontSize={sizes.text}
        color={color}
        _hover={{ color: "black" }}
        boxShadow={boxShadow}
        fontWeight={400}
      >
        {texto}
      </Button>
    </Link>
  );
};

export default CustomButton;
