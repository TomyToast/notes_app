import React, { Component } from 'react';
import DeleteBtn from './deleteBtn';
import EditBtn from './editBtn';

class NotesListElements extends Component {

    render() {
        const todoEntries = this.props.entries
        const elements = todoEntries.map((item, index) => {
            return (
                <li key={item.key}>
                    <div>
                        <DeleteBtn deleteItem={this.props.deleteItem} item={item} />
                        <EditBtn
                            editItem={this.props.editItem} handleEditInput={this.props.handleEditInput}
                            inputEditElement={this.props.inputEditElement}
                            value={item.value}
                            item={item} />
                    </div>
                    <div>
                        <div contentEditable={false}
                            ref={this.props.textareaElement} >
                            {item.value}
                        </div>
                    </div>
                    <div>{this.props.createdAt()}</div>

                </li>
            )
        })

        return <ul>{elements}</ul>
    }
}

export default NotesListElements;