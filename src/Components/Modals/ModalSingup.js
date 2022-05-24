import React from 'react'
import { Box, Button, Input, Space, Title } from '../../Css/global'

import Modal from 'react-native-modal'
import BouncyCheckbox from "react-native-bouncy-checkbox";



const ModalSingup = ({ModalSingupVisibilite , desativeModalsingUp,  navigation})=>{

    return(

        <Box>
        <Modal
         isVisible={ModalSingupVisibilite}
         animationInTiming={500}
         animationIn="slideInUp"
         >
            <Box left={-5} top={90}  color="white" width={"113%"} height={"100%"} radius={40}  >
                <Box width="100%"  align="center"  >
                    <Title bold size={30} top={5} > Registre-se</Title>
                      <Space size={"50px"} />
                    {/*Form*/}
                    <Box left={6} aling="center">
                       <Input placeholder="Nome"/>
                       <Space size={'30px'} />
                       <Input placeholder="Email"/>
                       <Space size={'30px'} />
                       <Input placeholder="Senha"/>
                       <Space size={'30px'} />
                       <Box row width={'80%'} align="center" >
                       <BouncyCheckbox
                        size={25}
                        fillColor="#c4c4c4"
                        unfillColor="#FFFFFF"
                      
                        iconStyle={{ borderColor: "#c4c4c4" }}
                    
                      
                        />
                       <Title> Ao clicar você concorda com nossos <Title color="primary" >Termos e Serviços.</Title></Title>
                       </Box>
                       <Space size={'60px'} />
                       <Button color="dark" width={"90%"} height={"60px"} radius="5" >
                             <Title color="white" bold size={25}> Login</Title>
                       </Button>
                       <Space size={'30px'} />
                       <Box left={10} >
                      <Title
                        size={20}  
                        > Já tem uma conta ? <Title  onPress={  desativeModalsingUp } color="primary" size={20} > login</Title> </Title>
                       </Box>
                    </Box>

                </Box>

            </Box>
        </Modal>
    </Box>
        )

}


export default ModalSingup;