import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


//ComponentDidUpdate is called to focus on the input box referred by the inputElementreference. The component is updated on submitting the form.
class MenuPanel extends Component {


  render() {
    return (
      <Form className=" mt-4 mb-5 " onSubmit={this.props.addItem}>
        <FormGroup>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 4 }}>
              <Label className="text-center">ReactJs Notes</Label>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="d-flex">
              <Input
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.value}
                onChange={this.props.handleInput}
              />
              <Button type="submit" >+</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>

    )
  }
}


export default MenuPanel;