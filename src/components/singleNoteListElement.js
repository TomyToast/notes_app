import React, { Component } from 'react'
import DeleteBtn from './deleteBtn';
import EditBtn from './editBtn';
import MarkDownElement from './markDownElement';
import {
    Card
} from 'reactstrap';

class singleNoteListElement extends Component {
    render() {
        return (
            <Card>
                <DeleteBtn deleteItem={this.props.deleteItem} item={this.props.item} />
                <EditBtn
                    editItem={this.props.editItem}
                    handleEditInput={this.props.handleEditInput}
                    inputEditElement={this.props.inputEditElement}
                    value={this.props.value}
                    item={this.props.item} />
                <MarkDownElement mdValue={this.props.value} status={this.props.item.status} timeOfCreation={this.props.item.createdAt} />
            </Card>
        )
    }
}

export default singleNoteListElement;