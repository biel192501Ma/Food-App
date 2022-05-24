import React from 'react'
import { Box, Button, Input, Space, Title } from '../../Css/global'

import Modal from 'react-native-modal'



const ModalSingin = ({modalvisibilite , navigation})=>{

    return(

        <Box>
        <Modal
         isVisible={modalvisibilite}
         animationInTiming={500}
         animationIn="slideInUp"
         >
            <Box left={-5} top={90}  color="white" width={"113%"} height={"70%"} radius={40}  >
                <Box width="100%"  align="center"  >
                    <Title bold size={30} top={5} > Login</Title>
                      <Space size={"50px"} />
                    {/*Form*/}
                    <Box left={6} aling="center">
                       <Input placeholder="Email"/>
                       <Space size={'30px'} />
                       <Input placeholder="Email"/>
                       <Space size={'60px'} />
                       <Button color="dark" width={"90%"} height={"60px"} radius="5" >
                             <Title color="white" bold size={25}> Login</Title>
                       </Button>
                       <Space size={'30px'} />
                       <Box left={10} >
                      <Title
                        size={20} 
                        > É novo aqui ? <Title  onPress={()=> alert(' em construção :)')} color="primary" size={20} >  Registre-se</Title> </Title>

                       </Box>
                    </Box>

                </Box>

            </Box>
        </Modal>
    </Box>
        )

}


export default ModalSingin;