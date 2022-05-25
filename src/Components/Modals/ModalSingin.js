import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Space,
  TextValidation,
  Title,
} from "../../Css/global";

import { ScrollView} from 'react-native'

import { useNavigation } from "@react-navigation/native";

import Modal from "react-native-modal";

//validação
import * as Yup from "yup";
import { Formik } from "formik";
import { Text } from "react-native";









const schema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .trim()
    .min(6, "Minimo 6 caracteres")
    .max(12, "Ops! sua senha não tem essa quantidade de caracteres!")
    .required("Senha obrigatória"),
});

const ModalSingin = ({ modalvisibilite,modalcontroler,  error, touched,ModalSingupVisibilite}) => {


  function handleSignTeste(initialValues) {
    if (email === "teste@123.com" && password === "123456") {
      navigation.navigate("Home");
    }
  }


  const navigation = useNavigation()
  return (
    <Box>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSignTeste}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setIsActive,
        }) => (
          <Modal
            isVisible={modalvisibilite}
            animationInTiming={500}
            animationIn="slideInUp"
          >
            <Box
              left={-5}
              top={90}
              color="white"
              width={"113%"}
              height={"110%"}
              radius={40}
            >
              <Box width="100%" align="center">
                <Title bold size={30} top={5}>
                  Login
                </Title>
                <Space size={"10%"} />
                {/*Form*/}
                <Box left={6} aling="center">
                  <Input
                  
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                   
                  />
                  {errors.email && touched.email ? (
                    <TextValidation size={12} color="error_validate" left={2}>
                      {errors.email}
                    </TextValidation>
                  ) : null}
                  <Space size={"30px"} />
                  <Input
                    placeholder="Senha"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <TextValidation size={12} color="error_validate" left={2}>
                      {errors.password}
                    </TextValidation>
                  ) : null}
                  <Box left={32} top={2}>
                  <Space size={"30px"} />
                    <Title onPress={() => alert(" em construção :)")} size={20}>
                      Esqueceu senha ?
                    </Title>
                  </Box>
                  <Space size={"20px"} />
                  <Button
                    color="dark"
                    width={"90%"}
                    height={"60px"}
                    radius="5"
                    onPress={handleSubmit}
                  >
                    <Title color="white" bold size={25}>
                      Login
                    </Title>
                  </Button>
                  <Space size={"30px"} />
                  <Box left={10}>
                    <Title  size={20}>
                      É novo aqui ?
                      <Title onPress={()=> {modalcontroler(false) ,ModalSingupVisibilite(true)}  } color="primary" size={20}>
                        Registre-se
                      </Title>
                    </Title>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Modal>
        )}
      </Formik>
    </Box>
  );
};

export default ModalSingin;
