import { useState } from 'react';
import { Card, Typography, Button, styled } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Interweave } from 'interweave';

const safeRegExp = (regStr, flags) => {
    let reg;
    try {
        reg = new RegExp(regStr, flags);
    } catch (e) {
        // nothing to do!
    }
    return reg;
}

const regExpChecker = (strInput, input, index, regExpStr) => {
    const reg = safeRegExp(regExpStr, "g");
    if (!reg) return false;
    const arr = strInput.match(reg);
    const answer = input.body.table[index].answer;
    if (!arr && answer === '') {
        return true;
    }
    return arr && arr.join('') === answer;
}

const isTaskComplete = (input, regExpStr) => {
    if (!input.body) return false;

    const reg = safeRegExp(regExpStr, "g");
    
    if (!reg) return false;
    
    const result = [];
    for (let i = 0; i < input.body.table.length; i++) {
        const strInput = input.body.table[i].text;
        const answer = input.body.table[i].answer;
        const arr = strInput.match(reg);
        if (!input.body.table[i].answer && !arr) {
            result.push(true);
        } else {
            result.push(arr && arr.join('') === answer);
        }
    }
    return result.every(item => item);
}

function RegExpInput ({ input, value, setInputValue, onNext }) {

    const [isDirty, setDirty] = useState(false);

    const getSymbol = (strInput, index) => {
        if (!isDirty) {
            return null;
        }
        const isValid = regExpChecker(strInput, input, index, value);
        return isValid ? <CheckCircleIcon style={{ color: "green" }} /> : <ErrorIcon style={{ color: "red" }} />;
    }

    const replaceByRegExp = (text) => {
        const reg = safeRegExp(value, "g");
        if (reg && value && reg.test(text)) {
            return text.replace(reg,  (match) => `<span style="color: orange">${match}</span>`);
        }
        return text;
    }

    const onChange = (e) => {
        if (!isDirty) setDirty(true);
        setInputValue(e.target.value);
    }

    const onNextClick = (e) => {
        setDirty(false);
        setInputValue('');
        onNext(e);
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
                                <td style={{ textAlign: 'right' }}>{getSymbol(row.text, i)}</td>
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
                            endAdornment: <InputAdornment position="start"><strong>/g</strong></InputAdornment>,
                        }}
                        defaultValue=""
                        value={value}
                    />
                    <Button onClick={onNextClick} disabled={!isTaskComplete(input, value)} sx={{ height: '53px', width: '10%', marginLeft: '5%'}} variant="outlined">Далее</Button>
            </div>
        </Card>
        );
}

export default RegExpInput;