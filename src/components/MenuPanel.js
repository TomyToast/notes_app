import React, { Component } from 'react';
//ComponentDidUpdate is called to focus on the input box referred by the inputElementreference. The component is updated on submitting the form.
class MenuPanel extends Component {


  render() {
    return (
      <>
        <form onSubmit={this.props.addItem}>
          <header>ReactJs Notes</header>
          <input
            placeholder="Task"
            ref={this.props.inputElement}
            value={this.props.currentItem.value}
            onChange={this.props.handleInput}
          />
          <button type="submit" >+</button>
        </form>
      </>
    )
  }
}


export default MenuPanel;