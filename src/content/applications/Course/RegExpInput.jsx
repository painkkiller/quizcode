import { Card, Typography, Button, styled } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';


function RegExpInput ({ input, checker }) {

    console.log(input);

    const getSymbol = (isValid) => {
        return isValid ? <CheckCircleIcon style={{ color: "green" }} /> : <ErrorIcon style={{ color: "red" }} />;
    }

    return (
        <Card style={{ marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
            <Typography variant="subtitle2" gutterBottom>{input?.body?.instruction}</Typography>
            <table style={{ width: '100%' }}>
                {
                    input?.body?.table.map(row => {
                        return (
                            <tr>
                                <td style={{ textAlign: 'left' }}>{row.task}</td>
                                <td style={{ textAlign: 'center' }}>{row.text}</td>
                                <td style={{ textAlign: 'right' }}>{getSymbol(false)}</td>
                            </tr>
                        );
                    })
                }
            </table>
            <div style={{ marginTop: '15px' }}>
                    <TextField
                        sx={{ width: '90%' }}
                        id="standard-size-normal"
                        defaultValue=""
                    />
                    <Button sx={{ height: '53px', width: '10%'}} variant="outlined">Далее</Button>
            </div>
        </Card>
        );
}

export default RegExpInput;