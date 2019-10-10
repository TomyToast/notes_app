import React, { Component } from 'react';
import getTimeHMS from '../functions/getTimeHMS';
import getDateYMD from '../functions/getDateYMD';

class CreatedAt extends Component {


    render() {
        const { seconds, minutes, hour, day, month, year } = this.props.timeOfCreation;

        return (
            <div >
                {`${this.props.status} at: `} <br />
                {getTimeHMS(hour, minutes, seconds)} <br />
                {getDateYMD(year, month, day)}
            </div>
        )
    }
}
export default CreatedAt;