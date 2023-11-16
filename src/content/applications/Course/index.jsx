import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container, Typography, Box, Card, Tooltip, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { moveNext, setProgress } from "src/utils";
import { loadCourse, updateProgress } from './courseSlice';
import { getUserProgress } from '../../../services/progress';
import Input from './inputs/Input';
import Body from './Body';


const CourseWrapper = styled(Container)(
  ({ theme }) => `
    margin: ${theme.spacing(4)};
    width: auto;
`
);

function Course() {

  let { courseId, topicId, subId } = useParams();
  const dispatch = useDispatch();

  const { course, progress } = useSelector(state => state.course);

  console.log('course', course);

  useEffect(async () => {
    const response = await axios.get(`/static/courses/${courseId}.json`);
    const progress = getUserProgress('user') || {}; // userId - user !!!
    dispatch(loadCourse(response.data)); // TODO: Сделать одним хуком или одним экшеном?
    dispatch(updateProgress(progress));
  }, []);

  const getTitle = () => {
    if (!topicId) {
      return course?.name;
    } else if (topicId && course?.topics && !subId) {
      return course?.topics[topicId]?.name;
    } else if (subId && course?.topics) {
      return course?.topics[topicId].subs[Number(subId)]?.title;
    }
    return "Загружаем...";
  }

  const getBody = () => {
    if (!topicId) {
      return course?.desc;
    } else if (topicId && course?.topics && !subId) {
      return course?.topics[topicId]?.body;
    } else if (subId && course?.topics) {
      return course?.topics[topicId].subs[Number(subId)]?.body;
    }
    return "Загружаем...";
  }

  const getInput = () => {
    if (subId && course?.topics) {
      return course?.topics[topicId].subs[Number(subId)]?.input;
    }
    return {};
  }

  const onNext = (e) => {
    console.log('onNext', topicId, subId);
    const newProgress = setProgress(progress, topicId, subId);
    dispatch(updateProgress(newProgress));
  }

  const getNextLink = () => {
    const next = moveNext(course, topicId, subId);
    console.log('next link', next);
    return next;
  }

  const getStepper = () => {
    if (course?.topics && course?.topics[topicId] && course?.topics[topicId].subs.length > 1) {

      return (
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={Number(subId)}>
            {
              course?.topics[topicId].subs.map((sub, i) =>{
                const title = course?.topics[topicId].subs[i].title;
                return (
                  <Tooltip title={title}>
                    <Step key={i} completed={Number(subId) > i}>
                      <StepLabel />
                    </Step>
                  </Tooltip>)})
            }
          </Stepper>
        </Box>
      );
    }
    return null;
  }

  return (
    <CourseWrapper>
      { getStepper() }
      <Typography variant='h1' gutterBottom>{getTitle()}</Typography><br/>
      <Card style={{ padding: '20px' }}>
        <Body body={getBody()} />
      </Card>
      <Input onNext={onNext} link={getNextLink()} input={getInput()} />
    </CourseWrapper>
  );
}

export default Course;
