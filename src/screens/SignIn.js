import React, {useState} from "react";
import { Box, Button, Space, Title } from "../css/global";



import ModalSingin from '../components/Modals/ModalSingin'

const SignIn = () => {

const [modal, setModal]=useState(false)

  return (
    <>
    <Box fluid color="primary" align="center">
      <Title color="white" size={40} bold top={30} >Food-App</Title>
   
   <Space size='500px' />
      <Box align="center" >
         <Button color="white" width={"90%"} height={"60px"} radius={5} onPress={()=>setModal(!modal , console.log(modal))}>
           <Title bold size={25} >Login</Title>
         </Button>
         <Space size='20px' />
         <Button>

         <Title color="white" bold size={25}>Registre-se</Title>
         </Button>
      </Box>
    
    </Box>
   <ModalSingin modalvisibilite={modal}/>
    </>
  );
};

export default SignIn;
