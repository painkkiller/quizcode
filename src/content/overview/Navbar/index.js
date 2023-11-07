import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Logo from 'src/components/LogoSign';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';

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

               color='black'
               sx={{
                  fontSize: '25px',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  letterSpacing: 2
               }}
            >
               QuizCode
            </Typography>
            <Button
               endIcon={<LoginIcon />}
               variant="contained"
               sx={{
                  marginLeft: 'auto',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  transition: 'all 0.3s ease',
                  color: '#223355',
                  background: "#fff",
                  borderColor: '#223355',
                  '&:hover': {
                     backgroundColor: '#223355',
                     color: '#fff',
                     borderColor: '#223355'
                  }
               }}>
               Войти
            </Button>
            <Button
               variant="contained"
               endIcon={<AddCircleOutlineIcon />}
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '10px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  letterSpacing: 2,
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
