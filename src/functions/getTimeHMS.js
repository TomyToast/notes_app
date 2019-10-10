import React from 'react';

function getTimeHMS(hour, minutes, seconds) {
    return (
        <>
            {`
            ${(hour < 10) ? `0${hour}` : hour}
            :
            ${(minutes < 10) ? `0${minutes}` : minutes}
            :
            ${(seconds < 10) ? `0${seconds}` : seconds}
            `}
        </>
    )
}

export default getTimeHMS;