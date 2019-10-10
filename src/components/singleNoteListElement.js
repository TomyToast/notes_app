import React, { Component } from 'react'
import DeleteBtn from './deleteBtn';
import EditBtn from './editBtn';
import MarkDownElement from './markDownElement';
import CreatedAt from './cretedAt';

class singleNoteListElement extends Component {
    render() {
        return (
            <>
                <DeleteBtn deleteItem={this.props.deleteItem} item={this.props.item} />
                <EditBtn
                    editItem={this.props.editItem}
                    handleEditInput={this.props.handleEditInput}
                    inputEditElement={this.props.inputEditElement}
                    value={this.props.value}
                    item={this.props.item} />
                <MarkDownElement mdValue={this.props.value} />
                <CreatedAt timeOfCreation={this.props.item.createdAt} status={this.props.item.status} />
            </>
        )
    }
}

export default singleNoteListElement;