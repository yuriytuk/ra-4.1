import React, { useState } from 'react';
import isValidHex from './isValidHex';
import hexToRgb from './hexToRgb';
import Rgb from './Rgb';

function Hex() {
    const [value, setValue] = useState('#');
    const [colorBody, setColorBody] = useState(null);
    
    const handleChange = (e) => {
        let input = e.target.value;
        if (input.length > 7) {
            input = input.slice(0, 7);
        }
        if (input.length === 7) {
            // проверка валидности ввода в input на hex
            if (isValidHex(input)) {
                // перевод hex в rgb
                const { r, g, b } = hexToRgb(input);
                setColorBody(`rgb(${r}, ${g}, ${b})`);
            } else {
                setColorBody('Ошибка!');
            }
        } else {
            setColorBody(null);
        }
        setValue(input);
    };

    return (
        <>
            <input
                className="hexColor"
                type="text"
                maxLength={7}
                value={value}
                onChange={handleChange}
            />
            <div>
                <Rgb colorRgb={colorBody} />  
            </div>
        </>        
    );
}

export default Hex;
