import React, { Component } from 'react';
import SingleNoteListElement from './singleNoteListElement';

class NotesListElements extends Component {

    render() {
        const todoEntries = this.props.entries
        const elements = todoEntries.map((item, index) => {
            return (
                <li key={item.key}>
                    <SingleNoteListElement
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem} handleEditInput={this.props.handleEditInput}
                        inputEditElement={this.props.inputEditElement}
                        createdAt={this.props.createdAt}
                        value={item.value}
                        item={item}
                    />
                </li>
            )
        })

        return <ul>{elements}</ul>
    }
}

export default NotesListElements;