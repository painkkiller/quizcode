import { Container, Grid, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import reg from './reg.png';
import typeofpng from './typeof.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Не пройдет 
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
// Пройден 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardItem from '../Card';

const testData = [
  {
    id: 1,
    title: 'Регулярные выражения',
    finished: true,
    type: 'Курс',
    image: reg,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente voluptate accusantium culpa, sed veniam praesentium libero ut nobis unde iste laborum vel.',
    level: 'Продвинутый',
    path: '/main/courses/regexp'
  },
  {
    id: 2,
    title: 'Типы данных в JavaScript',
    finished: true,
    type: 'Тест',
    image: typeofpng,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente voluptate accusantium culpa, sed veniam praesentium libero ut nobis unde iste laborum vel.',
    level: 'Начинающий',
    path: '/main/courses/jstypes'
  },
  {
    id: 3,
    title: 'Регулярные выражения',
    finished: false,
    type: 'Курс',
    image: reg,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente'
  },
  {
    id: 4,
    title: 'Регулярные выражения',
    finished: false,
    type: 'Курс',
    image: reg,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente voluptate accusantium culpa, sed veniam praesentium libero ut nobis unde iste laborum vel.'
  },
  {
    id: 5,
    title: 'Регулярные выражения',
    finished: false,
    type: 'Курс',
    image: reg,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente voluptate accusantium culpa, sed veniam praesentium libero ut nobis unde iste laborum vel.'
  },
  {
    id: 6,
    title: 'Регулярные выражения',
    finished: false,
    type: 'Курс',
    image: reg,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda, suscipit quae, quibusdam sequi voluptatum voluptatem sapiente voluptate accusantium culpa, sed veniam praesentium libero ut nobis unde iste laborum vel.'
  },
]

function Main() {
  return (
    <Container sx={{ p: 2.5, display: 'flex', justifyContent: 'center' }}
    >
      <Grid container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        alignItems="center"
        maxWidth="1150px"
      >
        {testData.map((data) => {
          return (<CardItem data={data} key={data.id} />)
        })}
      </Grid>
    </Container >
  );
}

export default Main;
