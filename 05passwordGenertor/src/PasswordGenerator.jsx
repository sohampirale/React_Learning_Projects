import React from 'react'

//hooks
import { useState, useCallback, useEffect, useRef } from 'react'

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = `!@#$%^&*()_+-=[]{}|;:',.<>/?\`~"\\`;

function PasswordGenerator() {
    const [password, setPassword] = useState('use slider to generate random password');
    const [includeNum, setIncludeNum] = useState(false);
    const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
    const [PWLen, setPWLen] = useState(8);
    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(() => {
        console.log('insid PW generator');

        let chars = alphabets;
        if (includeNum) chars += numbers;
        if (includeSpecialChar) chars += specialChars;
        let generatedPW = '';
        const charLen = chars.length;
        for (let i = 0; i < PWLen; i++) {
            generatedPW += (chars[Math.floor(Math.random() * charLen)]);
        }
        console.log('Random;ly generated password is : ' + generatedPW);
        setPassword(generatedPW)
    }, [includeNum, includeSpecialChar, PWLen]);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(password)
            .then(() => {
                passwordRef.current?.select();
                passwordRef.current?.setSelectionRange(0,44);
                console.log('Password copied successfully');
            })
            .catch(err => {
                console.log('error copying from clipboard ERR ' + err);
            })
    }, [password, PasswordGenerator])

    useEffect(() => {
        PasswordGenerator()
    }, [includeNum, includeSpecialChar, PWLen]);

    return (
        <>
            <textarea readOnly value={password} ref={passwordRef} className='p-10'></textarea> <button className='bg-blue-500 text-white' onClick={copyToClipboard}>Copy</button><br />
            <input type="range" min="8" max="30" value={PWLen} onChange={e => setPWLen(e.target.value)}></input><span>Length : {PWLen}</span><br />
            <label>Numbers<input type="checkbox" onChange={() => setIncludeNum(prev => !prev)}></input></label><br />
            <label>Special Characters<input type="checkbox" onChange={() => setIncludeSpecialChar(prev => !prev)}></input></label>
        </>
    )
}

export default PasswordGenerator
