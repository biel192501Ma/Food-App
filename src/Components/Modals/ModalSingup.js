import React, {useState} from 'react'
import { Box, Button, Input, Space, Title , TextValidation} from '../../Css/global'

import Modal from 'react-native-modal'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';

import { ScrollView} from 'react-native'

import * as Yup from "yup";
import { Formik } from "formik";



const schema = Yup.object({
    name: Yup.string().min(2,'minimo 2 caracteres').required('Nome obrigatório'),
    email: Yup.string().email('Email invalido').required('Email obrigatório'),
    password: Yup.string()
    .min(6, 'minino 6 caracteres')
    .required('Senha obrigatória')
    .max(12, "Ops! sua senha não tem essa quantidade de caracteres!"),
     checkbox: Yup.boolean().oneOf([true], 'coloque em ok').required('precisa confirmar o  termo e  o serviço'),

    
})



const ModalSingup = ({ModalSingupVisibilite , modalvisibilite , ModalsingUpControler,})=>{

    const navigation = useNavigation()

    return(

        <Box>

         
            <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                checkbox: ''
                
         
        }}
            validationSchema={schema}

            >
                   {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setIsActive,
        }) =>(
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
                          <Input placeholder="Nome"
                             onChangeText={handleChange("name")}
                             onBlur={handleBlur("name")}
                             value={values.name}
                          />
                          <TextValidation size={12} color="error_validate" left={2}>
                      {errors.name}
                    </TextValidation>
                          <Space size={'10px'} />

                          <Input placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                          />
                            <TextValidation size={12} color="error_validate" left={2}>
                      {errors.email}
                    </TextValidation>
                          <Space size={'10px'} />
                          <Input placeholder="Senha"
                             onChangeText={handleChange("password")}
                             onBlur={handleBlur("password")}
                             value={values.password}
                          />
                          <TextValidation size={12} color="error_validate" left={2}>
                      {errors.password}
                    </TextValidation>
                          <Space size={'10px'} />
                          <Box row width={'80%'} align="center" >
                              
                          <BouncyCheckbox
                           size={25}
                           fillColor="#c4c4c4"
                           unfillColor="#FFFFFF"
                           iconStyle={{ borderColor: "#c4c4c4" }}
                           onChangeText={handleChange("checkbox")}
                           onBlur={handleBlur("checkbox")}
                           value={values.checkbox}
                           
                           
                           
                         
                           />

                          <Title> Ao clicar você concorda com nossos <Title color="primary" >Termos e Serviços.</Title></Title>
                          </Box>
                                <TextValidation size={12} color="error_validate" left={2}>
                      {errors.checkbox}
                    </TextValidation>

                          <Space size={'30px'} />
                          <Button onPress={ handleSubmit} color="dark" width={"90%"} height={"60px"} radius="5" >
                                <Title color="white" bold size={25}> Login</Title>
                          </Button>
                          <Space size={'30px'} />
                          <Box left={10} >
                         <Title
                           size={20}  
                           > Já tem uma conta ? <Title  onPress={  ()=> {ModalsingUpControler(false), modalvisibilite(true)} } color="primary" size={20} > login</Title> </Title>
                          </Box>
                       </Box>
   
             
                   </Box>
   
               </Box>
           </Modal>
        )}

            </Formik>
    </Box>
        )

}


export default ModalSingup;