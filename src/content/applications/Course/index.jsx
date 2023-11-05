import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container, Typography, Box, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadCourse } from './courseSlice';


const CourseWrapper = styled(Container)(
  ({ theme }) => `
    margin: ${theme.spacing(4)};
    width: auto;
`
);

function Course() {

  let { courseId, topicId, subId } = useParams();
  const dispatch = useDispatch();

  const { course } = useSelector(state => state.course)

  console.log('course', course);

  useEffect(async () => {

    const response = await axios.get(`/static/courses/${courseId}.json`);
    dispatch(loadCourse(response.data));
  }, []);

  const getTitle = () => {
    if (!topicId) {
      return course?.name;
    } else if (topicId && course?.topics && !subId) {
      return course?.topics[topicId]?.name;
    } else if (subId && course?.topics) {
      return course?.topics[topicId].subs[Number(subId)]?.title;
    }
    return "Wrong title";
  }

  const getBody = () => {
    if (!topicId) {
      return course?.desc;
    } else if (topicId && course?.topics && !subId) {
      return course?.topics[topicId]?.body;
    } else if (subId && course?.topics) {
      return course?.topics[topicId].subs[Number(subId)]?.body;
    }
    return "Wrong body";
  }

  const getStepper = () => {
    if (course?.topics && course?.topics[topicId] && course?.topics[topicId].subs.length > 1) {
      return (
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={subId}>
            {
              course?.topics[topicId].subs.map((sub, i) => <Step key={i} completed={subId > i}><StepLabel> </StepLabel></Step>)
            }
          </Stepper>
        </Box>
      );
    }
    return null;
  }
  

  return (
    <CourseWrapper>
      { courseId }, { topicId } , { subId }
      { getStepper() }
      <Typography variant='h1' gutterBottom>{getTitle()}</Typography><br/>
      <Typography variant="body1" gutterBottom>{getBody()}</Typography><br/>
    </CourseWrapper>
  );
}

export default Course;
