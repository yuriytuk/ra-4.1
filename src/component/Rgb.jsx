import React, { useState, useEffect } from 'react';

function Rgb ({ colorRgb }) {
    const bodyColor = colorRgb;

    useEffect(() => {
        document.body.style.backgroundColor = bodyColor;
    }, [bodyColor]);

    return (
        <div className="hexColor"
            style={{ letterSpacing: '0px' }} >
            {colorRgb}
            
        </div>
    )
}

export default Rgb