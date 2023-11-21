import { useState } from 'react';
import NextInput from "./NextInput";
import RegExpInput from "./RegExpInput";



function Input ({ input, onNext, link }) {

    const [ inputStrValue, setInputStrValue ] = useState('');

    if (input.type === 'next') {
        return <NextInput onNext={onNext} link={link} />
    } else if (input.type === 'regexp-input') {
        return <RegExpInput value={inputStrValue} setInputValue={setInputStrValue} input={input} onNext={onNext} />
    }
    return null;
}

export default Input;