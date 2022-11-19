import { Stack, Image, Text, Box, useBreakpointValue, Input } from "@chakra-ui/react"
import { colors, sizes, borders, boxShadow }  from '../../theme/theme'
import CustomButton from "../../components/Button"

const Login = () => {
    const direction = useBreakpointValue({
        base: 'column',
        md: 'row',
})

    return (
        <Stack bgColor={'blue.100'} width={'100vw'} height={'100vh'} bgImage={"/images/bglogin.png"} bgRepeat={'no-repeat'} bgSize={'cover'} direction={direction}>
            <Stack w={'100%'} h={'100%'} bgColor={colors.blueOpacity} p={'30px'} align={direction === 'column' ? 'center' : 'none'}>
                <Stack direction={direction} display={'flex'} justify={'space-between'} align={'center'} h={direction === 'row'?  'none' : '160px'}>
                    <Image src="/images/logo.svg" alt="logo" width={'120px'} height={'120px'} color={'blue'}/>
                    <Text fontSize={sizes.title} w={'40%'} textAlign={'center'} color={'white'} fontWeight={500} hidden={direction === 'column'}>Sistema de gestión de contenidos Técnica Martínez de alzaga - DOCENTE</Text>
                    <CustomButton bgColor={colors.blue3} link={'/'} texto={'Solicitar acceso'} color={'white'} />
                </Stack>
                <Stack w={'100%'} align={'center'}>
                    <Box bgColor={colors.blue5} w={direction === 'row' ? '450px' : '300px'} h={'400px'} borderRadius={borders.borderRadius} align={'center'} mt={10} p={6}  boxShadow={boxShadow}>
                        <Text fontSize={sizes.miniTitle} color={'white'} align={'center'}>Acceso</Text>
                        <Stack w={'100%'} align={'center'} my={10} gap={8} px={6}>
                            <Input placeholder="Usuario" bgColor={'white'} borderRadius={borders.borderRadius} border={'none'} _focusVisible={{borderColor:'none'}}/>
                            <Input type={'password'} placeholder="Contraseña" bgColor={'white'} borderRadius={borders.borderRadius} border={'none'} _focusVisible={{borderColor:'none'}}/>
                        </Stack>
                        <CustomButton bgColor={colors.buttonGreen} link={'/home'} texto={'Ingresar'}  color={'white'} />
                        <Text fontSize={sizes.details} color={'white'} mt={4} opacity={0.4}>Olvidaste tu contraseña?</Text>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login