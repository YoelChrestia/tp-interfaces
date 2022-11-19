import { Button } from "@chakra-ui/react"
import { sizes, boxShadow } from '../theme/theme'

const CustomButton = ({bgColor, link, texto, color}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Button type="submit" w={'150px'} h={'40px'} bgColor={bgColor} fontSize={sizes.text} color={color} _hover={{color:'black'}} boxShadow={boxShadow}>{texto}</Button>
        </a>
    )
}

export default CustomButton
