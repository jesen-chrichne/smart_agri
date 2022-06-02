import React from 'react';

const Button = ({bgColor,color, size, text,borderRadius}) => {
    return (
        <button type="button" style={{backgroundColor: bgColor,color,borderRadius,margin:"2px"}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
            {text}
        </button>
    )
}

export default Button