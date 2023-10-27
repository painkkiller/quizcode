
import { Card, Grid, Typography } from "@mui/material";
import { Box, styled/* , useTheme */ } from '@mui/material';

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)'
  }));


function Tests() {
  
    return (
        <Card className="card">
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <ContentBox>
                        <Typography>Тут будут тесты</Typography>
                    </ContentBox>
                </Grid>
            </Grid>
        </Card>

    );
}


export default Tests;