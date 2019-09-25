import React, { Component } from 'react';
import DeleteBtn from './deleteBtn';
import EditBtn from './editBtn';
import getTimeHMS from '../functions/getTimeHMS';
import getDateYMD from '../functions/getDateYMD';

class NotesListElements extends Component {

    render() {
        const todoEntries = this.props.entries
        const elements = todoEntries.map((item, index) => {
            return (
                <li key={item.key}>
                    <div>
                        <DeleteBtn deleteItem={this.props.deleteItem} item={item} />
                        <EditBtn editItem={this.props.editItem} item={item}
                            block={this.block} />
                    </div>
                    <div>
                        <div
                            // onChange={() => this.props.handleTextarea}

                            ref={this.props.textareaElement} >
                            {item.value}
                        </div>
                    </div>
                    <div>{getDateYMD()}</div>
                    <div>{getTimeHMS()}</div>

                </li>
            )
        })

        return <ul>{elements}</ul>
    }
}

export default NotesListElements;