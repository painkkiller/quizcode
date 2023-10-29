import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadCourse } from './courseSlice';


const CourseWrapper = styled(Container)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
`
);

function Course() {

  let { courseId } = useParams();
  const dispatch = useDispatch();

  const { course } = useSelector(state => state.course)

  console.log('course', course);

  useEffect(async () => {

    const response = await axios.get(`/static/courses/${courseId}.json`);
    dispatch(loadCourse(response.data));
    
  }, []);
  

  return (
    <CourseWrapper className="footer-wrapper">
      Курс { courseId }
    </CourseWrapper>
  );
}

export default Course;
