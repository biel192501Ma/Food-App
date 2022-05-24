import React, {useState} from "react";
import { Box, Button, Space, Title } from "../css/global";



<<<<<<< HEAD
import ModalSingin from '../Components/Modals/ModalSingin'
import ModalSingup from "../Components/Modals/ModalSingup";
=======
import ModalSingin from '../components/Modals/ModalSingin'
>>>>>>> 81c60a2c42fbd7e424a21588d5723508f695ab32

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
