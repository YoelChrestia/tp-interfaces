import { Button } from "@chakra-ui/react"
import { Link, Router } from "react-router-dom"
import { sizes, boxShadow } from '../theme/theme'

const CustomButton = ({bgColor, link, texto, color}) => {

    return (
        <Router>
            <Link to='/home'>
            <Button type="submit" w={'150px'} h={'40px'} bgColor={bgColor} fontSize={sizes.text} color={color} _hover={{color:'black'}} boxShadow={boxShadow}>{texto}</Button>
        </Link>
        </Router>
        
    )
}

export default CustomButton
