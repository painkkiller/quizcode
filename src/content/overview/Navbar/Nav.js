import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import "./style.css";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


//          primary: '#2e3857',
//          secondary: '#586381',

export default function Nav() {
   return (

      <AppBar sx={{
         bgcolor: '#fff',
         p: 0.5
      }}>
         <Container>
            <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-between">
               <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-between">
                  <div>
                     <div className='n'>
                        <div className='text'>QC</div>
                     </div>
                  </div>


                  <div style={{ color: 'black' }}>Logo sign</div>
                  <Typography variant="h1" component="div" sx={{ color: '#4255ff' }} >
                     QuizCode
                  </Typography>

               </Stack>

               <Button variant="contained" sx={{ bgcolor: '#fddc63', color: '#282F3F' }}>Войти</Button>

            </Stack>
         </Container>

      </AppBar >
   )
}
