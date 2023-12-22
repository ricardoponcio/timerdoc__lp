import { useEffect, useState } from 'react';
import './input.css';

export function Input({ placeholder, value, onChange, name, type, textarea, rows, required }) {

    const [text, setText] = useState(value);

    useEffect(() => {
        if (onChange) onChange(text)
    }, [text, onChange]);

    return (<>
        {!textarea ? <input className='custom-input' placeholder={placeholder} type={type} name={name} value={value} onChange={(e) => setText(e.target.value)} required={!!required} />
            : <textarea className='custom-textarea' placeholder={placeholder} rows={rows} name={name} value={value} onChange={(e) => setText(e.target.value)} required={!!required}></textarea>
        }
    </>);
}