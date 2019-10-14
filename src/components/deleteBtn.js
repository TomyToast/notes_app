import React, { Component } from 'react';
import { Button } from 'reactstrap';

class deleteBtn extends Component {
    render() {
        return (
            <Button color="danger" onClick={() => this.props.deleteItem(this.props.item.key)}>
                Delete
            </Button>
        )
    }
}
export default deleteBtn;