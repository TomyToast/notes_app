import React from 'react';

function getTimeHMS() {
    const date = new Date();
    const second = date.getSeconds();
    return (
        <>
            {`at:
            ${(date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()}
            :
            ${(date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()}
            :
            ${(second < 10) ? `0${second}` : second}
            `}
        </>
    )
}

export default getTimeHMS;