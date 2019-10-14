import React, { Component } from 'react';
import {
    Button, Form, FormText
} from 'reactstrap';

class editBtn extends Component {


    render() {
        return (
            <>
                <Form className="d-flex mt-3 justify-content-center align-items-center flex-column" onSubmit={(e) => { e.preventDefault(); this.props.editItem(this.props.item.key) }}>
                    <FormText>
                        <textarea
                            placeholder="Try MarkDown here..."
                            onChange={this.props.handleEditInput}
                        />
                    </FormText>
                    <Button className="EditBtn" type="submit" color="info ">Edit
                    </Button>
                </Form>
            </>
        )
    }
}
export default editBtn;