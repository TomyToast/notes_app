import React, { Component } from 'react';
import SingleNoteListElement from './singleNoteListElement';
import { Container, Row, Col } from 'reactstrap';

class NotesListElements extends Component {

    render() {
        const todoEntries = this.props.entries
        const elements = todoEntries.map((item, index) => {
            return (
                <li key={item.key} className="p-1 bg-dark my-2 rounded">
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

        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ul >{elements}</ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NotesListElements;