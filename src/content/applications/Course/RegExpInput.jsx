import { Card, Typography, Button, styled } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Interweave } from 'interweave';



function RegExpInput ({ input, value, setInputValue, checker }) {

    console.log(input, value);

    const getSymbol = (isValid) => {
        return isValid ? <CheckCircleIcon style={{ color: "green" }} /> : <ErrorIcon style={{ color: "red" }} />;
    }

    const replaceByRegExp = (text) => {
        const reg = new RegExp(value, "gi");
        if (value && reg.test(text)) {
            let txt = text.replace(reg,  (match) => `<span style="color: orange">${match}</span>`);
            console.log(txt);
            return txt;
        }
        return text;
    }

    const onChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <Card style={{ marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
            <Typography variant="subtitle2" gutterBottom>{input?.body?.instruction}</Typography>
            <table style={{ width: '100%' }}>
                <tbody>
                {
                    input?.body?.table.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td style={{ textAlign: 'left' }}>{row.task}</td>
                                <td style={{ textAlign: 'center' }}><Interweave content={replaceByRegExp(row.text)} /></td>
                                <td style={{ textAlign: 'right' }}>{getSymbol(false)}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            <div style={{ marginTop: '15px' }}>
                    <TextField
                        sx={{ width: '85%' }}
                        onChange={onChange}
                        id="standard-size-normal"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><strong>/</strong></InputAdornment>,
                            endAdornment: <InputAdornment position="start"><strong>/gi</strong></InputAdornment>,
                        }}
                        defaultValue=""
                    />
                    <Button sx={{ height: '53px', width: '10%', marginLeft: '5%'}} variant="outlined">Далее</Button>
            </div>
        </Card>
        );
}

export default RegExpInput;