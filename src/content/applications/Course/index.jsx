import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Card, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { moveNext, setProgress } from "src/utils";
import { loadCourse, updateProgress } from './courseSlice';
// import { getUserProgress } from '../../../services/progress';
import Input from './inputs/Input';
import Body from './Body';
import TopicStepper from './TopicStepper';


const CourseWrapper = styled(Container)(
  ({ theme }) => `
    margin: ${theme.spacing(4)};
    width: auto;
`
);

function Course() {

  let { courseId, topicId, subId } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { content, progress } = useSelector(state => state.course);

  console.log('course', content, progress);

  useEffect(async () => {
    const response = await axios.get(`/static/courses/${courseId}.json`);
    // const progress = getUserProgress('userId', courseId) || {}; // userId - user !!!
    dispatch(loadCourse(response.data)); // TODO: Сделать одним хуком или одним экшеном?
    // dispatch(updateProgress(progress));
  }, []);

  const getTitle = () => {
    if (!topicId) {
      return content?.name;
    } else if (topicId && content?.topics && !subId) {
      return content?.topics[topicId]?.name;
    } else if (subId && content?.topics) {
      return content?.topics[topicId].subs[Number(subId)]?.title;
    }
    return "Загружаем...";
  }

  const getBody = () => {
    if (!topicId) {
      return content?.desc;
    } else if (topicId && content?.topics && !subId) {
      return content?.topics[topicId]?.body;
    } else if (subId && content?.topics) {
      return content?.topics[topicId].subs[Number(subId)]?.body;
    }
    return "Загружаем...";
  }

  const getInput = () => {
    if (subId && content?.topics) {
      return content?.topics[topicId].subs[Number(subId)]?.input;
    }
    return {};
  }

  const onNext = (e) => {
    console.log('onNext', topicId, subId, progress);
    const newProgress = setProgress(progress, topicId, subId);
    console.log('newProgress', newProgress);
    dispatch(updateProgress({ progress: newProgress, userId: 'userId', courseId }));
    const nextLink = getNextLink();
    navigate(nextLink);
  }

  const getNextLink = () => {
    const next = moveNext(content, topicId, subId);
    console.log('next link', next);
    return next;
  }

  return (
    <CourseWrapper>
      <TopicStepper course={content} topicId={topicId} subId={subId} progress={progress} />
      <Typography variant='h1' gutterBottom>{getTitle()}</Typography><br/>
      <Card style={{ padding: '20px' }}>
        <Body body={getBody()} />
      </Card>
      <Input onNext={onNext} link={getNextLink()} input={getInput()} />
    </CourseWrapper>
  );
}

export default Course;
