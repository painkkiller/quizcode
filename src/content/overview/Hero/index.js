// Box (@mui/material),
import { Button, Container, Grid, Typography, styled } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          {/* <LabelWrapper color="success">Version 2.0.0</LabelWrapper> */}
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            QuizCode
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Проверьте свои знания с QuizCode
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/#/auth/login"
            size="large"
            variant="contained"
          >
            Войти
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="/#/auth/signup"
            size="large"
            variant="text"
          >
            Регистрация
          </Button>
          {/* <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by MUI (Material-UI)</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A simple and customizable component library to build faster,
                  beautiful, and accessible React apps.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <JsAvatar>
                <img
                  src="/static/images/logo/javascript.svg"
                  alt="javascript"
                />
              </JsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with Javascript</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Tokyo Free React Admin Dashboard features a modern technology
                  stack and is built with React + Javascript.
                </Typography>
              </Typography>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
