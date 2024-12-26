import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Не пройден
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
// Пройден
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function CardItem({ data }) {
  const navigate = useNavigate();
  const navigateToCourse = (path) => {
    if (!path) {
      console.log('no path');
    }
    navigate(path);
  };

  const { title, finished, type, image, desc, level, path } = data;
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              sx={{
                cursor: 'default',
                '&:hover': {
                  background: 'none'
                }
              }}
            >
              {finished ? (
                <CheckCircleOutlineIcon color="success" />
              ) : (
                <PanoramaFishEyeIcon color="black" />
              )}
            </IconButton>
          }
          title={title}
          subheader={type}
        />
        <CardMedia component="img" height="155" image={image} alt={title} />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Typography variant="body2" color="text.secondary">
            {`${desc.substring(0, 100)}...`}
          </Typography>
          <Typography
            vairant="body2"
            sx={{ fontWeight: 'bold', fontStyle: 'oblique', letterSpacing: 1 }}
          >
            {level ? `Уровень: ${level}` : `Уровень: Undefined`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            href={path}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              letterSpacing: 2,
              '&:hover': {
                backgroundColor: '#58c924',
                color: '#fff'
              }
            }}
          >
            Перейти
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
