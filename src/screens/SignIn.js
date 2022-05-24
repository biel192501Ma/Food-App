import React, {useState} from "react";
import { Box, Button, Space, Title } from "../Css/global";



import ModalSingin from '../Components/Modals/ModalSingin'
import ModalSingup from "../Components/Modals/ModalSingup";

const SignIn = () => {

const [modal, setModal]=useState(false)
const [modalSingUp, setModalSingUp]=useState(false)
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

         <Title onPress={()=>setModalSingUp(!modalSingUp , console.log(modalSingUp))} color="white" bold size={25}>Registre-se</Title>
         </Button>
      </Box>
    
    </Box>

    {/*MOdais*/}
   <ModalSingin modalvisibilite={modal}/>
   <ModalSingup ModalSingupVisibilite={modalSingUp} desativeModalsingUp={()=>setModalSingUp(!modalSingUp)} />
    </>
  );
};

export default SignIn;
