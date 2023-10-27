import { Box, Container, Typography } from '@mui/material';

function Main() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            position: 'relative',
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
                color:'#282F3F',
                maxWidth: '500px',
                fontSize: '25px',
                fontWeight: '700'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, tenetur.
            </Typography>
            <Typography
              sx={{
                color:'#282F3F',
                textAlign: 'left',
                alignItems: 'center',
                maxWidth: '500px',
                fontSize: '16px'
              }}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolores, soluta tenetur ipsa dignissimos deleniti at optio quae alias reprehenderit voluptates placeat laudantium exercitationem repudiandae ad nihil. Temporibus, error maiores!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
