import { Box, Container, Typography } from '@mui/material';

function Main() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.prismic.io/quizlet-web/ZDRiOGI2MTEtOTU1NS00Y2Q1LWJjN2QtM2Y2NzYwYTJhODQ1_6aa15201-1bbd-4bab-803d-93e7d2d4110e_altimage128129.png?auto=compress,format&rect=0,0,2880,1317&w=2880&h=1317)',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            position:'relative',
            alignItems: 'center',
            justifyContent: 'left',
            padding: '20px'
          }}
        >
          <Box sx={{ position: 'relative', top: '50%', bottom: '50%' }}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'left',
                alignItems: 'center',
                color: '#fff',
                maxWidth: '500px',
                fontSize: '25px',
                fontWeight: '700'
              }}
            >
              Легко осваивайте програмирование с помощью карточек и пробных
              тестов
            </Typography>
            <Typography
              sx={{
                textAlign: 'left',
                alignItems: 'center',
                color: '#fff',
                maxWidth: '500px',
                fontSize: '16px'
              }}
            >
              Присоединяйтесь к 60 миллионам учеников по всему миру, которые
              используют карточки, пробные тесты и игры Quizlet, основанные на
              научных принципах, чтобы достигать своих целей в школе,
              университете и за их пределами.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
