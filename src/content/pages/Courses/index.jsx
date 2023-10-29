import * as React from 'react';
import { Card, Grid, Typography } from "@mui/material";
import { Box, styled/* , useTheme */ } from '@mui/material';
import { useParams } from 'react-router-dom';

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)'
  }));


function Courses() {

    let { courseId } = useParams();
  
    return (
        <Card className="card">
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <ContentBox>
                        <Typography>Тут будут курсы</Typography>
                        <Typography>{ courseId }</Typography>
                    </ContentBox>
                </Grid>
            </Grid>
        </Card>

    );
}


export default Courses;