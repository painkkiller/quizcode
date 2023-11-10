import { Card, Button } from "@mui/material";



function NextInput ({ onNext }) {

    return (
        <Card style={{ marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
            <Button onClick={onNext} sx={{ height: '53px', width: '10%', marginLeft: '90%'}} variant="outlined">Далее</Button>
        </Card>
    );
}

export default NextInput;