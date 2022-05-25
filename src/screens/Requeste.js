import React from 'react';

import { Box, Button, Title } from '../Css/global';;

import { StretchyScrollView } from 'react-native-stretchy'
import Icons from 'react-native-vector-icons/Feather'



const Request = ()=>{

return(
    <>

        
        
    
        <StretchyScrollView
   
        image={require('../Assets/macarrão.png')}
        
       >
           
       <Box top={5} width={'90%'} >

     <Title bold size={25}  >  Macarronada Suiça</Title>

     <Title left={4} top={10} font={'secundary'} opacity size={20}  > Macarrão ao molho , acompanhado com carne suiça , mangericão e queijo ralado.</Title>

     <Title left={4} top={20} bold size={20}>R$  <Title size={20}>19,50</Title> </Title>

       </Box>

       <Box align="center" top={30}>
           <Button color="dark" width={'90%'} height={'60px'} row >
               <Title paddingRight={5} color="white" bold size={20} >Adicionar</Title>
               

               <Icons name="shopping-cart"color={'#FFF'} size={20} />
           
           </Button>
       </Box>
       </StretchyScrollView>

            </>
)

}


export default Request;