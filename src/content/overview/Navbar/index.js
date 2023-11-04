import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Link } from '@mui/material';
// import { Link } from 'react-router-dom';
import Logo from 'src/components/LogoSign';

const buttonsNavStyles = {
  mt: '2.5px',
  color: '#223355',
  fontSize: '16px',
  textTransform: 'uppercase',
  fontWeight: 'light',
  letterSpacing: 1,
  height: '80px',
  padding: '0',
  borderRadius: '0',
  transition: 'all 0.3s ease',
  width: '100%',
  '&:hover': {
    backgroundColor: '#fff'
  },
  '&:after': {
    bottom: '0',
    content: "''",
    display: 'block',
    height: '2px',
    left: '50%',
    position: 'absolute',
    background: '#223355',
    transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
    width: '0',
    borderRadius: '5px 5px 0px 0px'
  },
  '&:hover:after': {
    width: '100%',
    left: '0'
  }
};

const underlineActive = {
  '&:after': {
    width: '100%',
    left: '0'
  }
};

const currentUrl = window.location.pathname;

const buttonsAuthStyles = {
  fontSize: '16px',
  textTransform: 'uppercase',
  fontWeight: 'light',
  letterSpacing: 1,
  transition: 'all 0.3s ease'
};

const Nav = () => {
  return (
    <AppBar
      position="static"
      variant="elevation"
      sx={{
        background: '#FFFFFF',
        paddingLeft: '16px',
        boxShadow:
          '0px 2px 8px -3px rgba(34, 51, 84, 0.2), 0px 5px 22px -4px rgba(34, 51, 84, 0.1);',
        paddingRight: '16px'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Logo />
          <Link href="overview" style={{ textDecoration: 'none' }}>
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
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/">
            <Button
              sx={
                currentUrl.includes('/')
                  ? [buttonsNavStyles, underlineActive]
                  : buttonsNavStyles
              }
              variant="text"
            >
              Главная
            </Button>
          </Link>
          <Link href="main/tests/test1">
            <Button
              sx={
                currentUrl.includes('main/tests/')
                  ? [buttonsNavStyles, underlineActive]
                  : buttonsNavStyles
              }
              variant="text"
            >
              Тесты
            </Button>
          </Link>
          <Link href="main/courses/course1">
            <Button
              sx={
                currentUrl.includes('main/courses/')
                  ? [buttonsNavStyles, underlineActive]
                  : buttonsNavStyles
              }
              variant="text"
            >
              Курсы
            </Button>
          </Link>
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
          <Link href="auth/login">
            <Button
              style={buttonsAuthStyles}
              sx={{
                color: '#223355',
                '&:hover': {
                  backgroundColor: '#223355',
                  color: '#fff'
                }
              }}
            >
              Войти
            </Button>
          </Link>
          <Link href="auth/signup">
            <Button
              variant="contained"
              style={buttonsAuthStyles}
              sx={{
                marginLeft: '10px',
                background: '#5568ff;',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#58c924',
                  color: '#fff'
                }
              }}
            >
              Регистрация
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
