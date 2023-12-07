import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Body from './Body';


function Solution ({ solution }) {
    console.log('Solution', solution);

    const [open, setOpen ] = useState(false);

    return solution ? (
        <Card textAlign='center' style={{ marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
           { open ? ( 
                <Body body={solution} />
                ) : <CardActions style={{justifyContent: 'center'}}><Button onClick={e => setOpen(true)} sx={{ height: '53px', width: '30%', margin: 'auto'}} variant="outlined">Решение</Button></CardActions>
           } 
        </Card>
    ) : null;
}

export default Solution;