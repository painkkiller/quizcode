import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";



const Nav = () => {

   return (
      <AppBar sx={{ background: "#ffff", padding: '15px' }}>
         <Toolbar>

            <h5>ЛОГО!!!</h5>
            <Typography sx={{ color: "#4255ff", fontSize: '18px', marginRight: '15px' }}>
               QuizCode
            </Typography>
            <Button variant="text">Главная</Button>
            <Button variant="text">Тесты</Button>


            <Button sx={{ marginLeft: "auto", color: "#586381", fontSize: '16px' }}>Войти</Button>
            <Button variant="contained" sx={{ marginLeft: '10px', background: "#fddc63", color: "#282F3F", fontSize: '16px' }}>Регистрация</Button>
         </Toolbar>
      </AppBar >
   )
}

export default Nav