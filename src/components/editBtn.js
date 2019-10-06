import React, { Component } from 'react';

class editBtn extends Component {
    componentDidUpdate() {
        this.props.inputEditElement.current.focus();
    }

    render() {
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.props.editItem(this.props.item.key) }}>
                <input
                    placeholder="Edit me..."
                    onChange={this.props.handleEditInput}
                    ref={this.props.inputEditElement}
                />
                <button type="submit" >Edit
                    </button>
            </form>
        )
    }
}
export default editBtn;