import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Logo from 'src/components/LogoSign';

const Nav = () => {
   return (
      <AppBar
         position="static"
         variant="elevation"
         sx={{ background: '#FFFFFF', padding: '15px' }}
      >
         <Toolbar>
            <Logo />
            <Typography
               sx={{
                  color: '#223355',
                  fontSize: '25px',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  letterSpacing: 1
               }}
            >
               QuizCode
            </Typography>
            <Button sx={{
               color: '#223355', fontSize: '16px', textTransform: 'uppercase', fontWeight: 'light', letterSpacing: 1, '&:hover': {
                  backgroundColor: '#fff'
               }
            }} variant="text">
               Главная
            </Button>
            <Button sx={{
               color: '#223355', fontSize: '16px', textTransform: 'uppercase', fontWeight: 'light', letterSpacing: 1, '&:hover': {
                  backgroundColor: '#fff'
               }
            }} variant="text">Тесты</Button>
            <Button sx={{
               marginLeft: 'auto', color: '#223355', fontSize: '16px', textTransform: 'uppercase', fontWeight: 'light', letterSpacing: 1,
               transition: 'all 0.1s ease',
               '&:hover': {
                  backgroundColor: '#223355',
                  color: '#fff',
               }
            }}>
               Войти
            </Button>
            <Button
               variant="contained"
               sx={{
                  marginLeft: '10px',
                  background: '#5568ff;',
                  color: '#fff',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  fontWeight: 'light',
                  letterSpacing: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                     backgroundColor: '#58c924',
                     color: '#fff',
                  }
               }}
            >
               Регистрация
            </Button>
         </Toolbar>
      </AppBar>
   );
};

export default Nav;
