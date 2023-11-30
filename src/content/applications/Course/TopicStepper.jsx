import { useNavigate } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, Tooltip } from '@mui/material';



function TopicStepper ({ course, topicId, subId, progress }) {

    const navigate = useNavigate();

    const makeStepLink = (index) => {
        return `/main/courses/${course?.id}/${topicId}/${index}`;
    }

    const onStepClick = (index) => {
      console.log(index, 'clickkk');
      navigate(makeStepLink(index));
    }

    if (course?.topics && course?.topics[topicId] && course?.topics[topicId].subs.length > 1) {

        return (
          <Box sx={{ width: '100%' }}>
            <Stepper
              sx={{
                '.Mui-active': {
                  color: '#556f !important'
                }
              }}
              activeStep={Number(subId)}
            >
              {
                course?.topics[topicId].subs.map((sub, i) =>{
                  const title = course?.topics[topicId].subs[i].title;
                  return (
                    <Tooltip key={i} title={title}>
                        <Step sx={{ cursor: 'pointer' }} onClick={e => onStepClick(i)} key={i} completed={progress?.[topicId]?.[i]}>
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

export default TopicStepper;