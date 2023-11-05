import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadCourse } from './courseSlice';


const CourseWrapper = styled(Container)(
  ({ theme }) => `
    margin: ${theme.spacing(4)};
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
  

  return (
    <CourseWrapper>
      Курс { courseId }, { topicId } , { subId }
      <Typography variant='h1'>{getTitle()}</Typography>
    </CourseWrapper>
  );
}

export default Course;
