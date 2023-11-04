import { Box, Container, Typography } from '@mui/material';

const styles = {
  alignItems: 'start',
  fontSize: '5vh',
  fontWeight: '900',
  letterSpacing: 1,
  backgroundColor: 'white',
  maxWidth: 'fit-content',
  padding: '3px'
};

const typografyText = [
  {
    text: '<h1>Проходи</h1>',
    style: { color: '#57CA22', borderRadius: '10px 10px 0px 10px' }
  },
  {
    text: '<h2>Создавай</h2>',
    style: {
      color: '#5569ff',
      borderRadius: '0px 10px 0px 10px',
      marginLeft: '200px'
    }
  },
  {
    text: '<h3>Тесты</h3>',
    style: {
      borderRadius: '0px 10px 10px 10px',
      color: '#223355',
      marginLeft: '450px'
    }
  }
];

const typography = typografyText.map((item) => (
  <Typography variant="h6" sx={item.style} style={styles}>
    {item.text}
  </Typography>
));

function Main() {
  return (
    <Box
      sx={{
        fontFamily:
          '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        maxHeight: '100vh',
        zIndex: '1',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '105%',
        backgroundPosition: '0px -140px',
        '&:before': {
          content: "''",
          filter: 'blur(4px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'inherit'
        }
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: '900px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            position: 'relative',
            mt: '200px'
          }}
        >
          {typography}
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
