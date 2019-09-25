import React from 'react';
function getDateYMD() {
    const date = new Date();
    return (
        <>
            {`
            ${date.getFullYear()}
            -
            ${(date.getMonth() < 10) ? `0${date.getMonth()}` : date.getMonth()}
            -
            ${(date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()}
            `}
        </>
    )
}

export default getDateYMD;