import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Logo from 'src/components/LogoSign';

const Nav = () => {
  return (
    <AppBar
      position="static"
      variant="elevation"
      sx={{ background: '#ffff', padding: '15px' }}
    >
      <Toolbar>
        <Logo />
        <Typography
          sx={{
            color: '#4255ff',
            fontSize: '25px',
            fontWeight: '700',
            marginRight: '15px'
          }}
        >
          QuizCode
        </Typography>
        <Button sx={{ color: '#282F3F', fontSize: '16px'  }} variant="text">
          Главная
        </Button>
        <Button sx={{ color: '#282F3F', fontSize: '16px'  }} variant="text">Тесты</Button>
        <Button sx={{ marginLeft: 'auto', color: '#586381', fontSize: '16px' }}>
          Войти
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: '10px',
            background: '#fddc63',
            color: '#282F3F',
            fontSize: '16px'
          }}
        >
          Регистрация
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
