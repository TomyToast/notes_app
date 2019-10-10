import React from 'react';
function getDateYMD(year, month, day) {
    return (
        <>
            {`
            ${year}
            -
            ${(month < 10) ? `0${month}` : month}
            -
            ${(day < 10) ? `0${day}` : day}
            `}
        </>
    )
}

export default getDateYMD;