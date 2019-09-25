import React, { Component } from 'react';

class editBtn extends Component {
    componentDidUpdate(prevProps) {
        console.log(prevProps.item);
    }

    render() {
        return (
            <form onSubmit={this.block}>
                <input
                    placeholder="Edit me..."
                    onChange={this.props.handleInput}
                />
                <button type="submit" onClick={(e) => { e.preventDefault(); this.props.editItem(this.props.item.key) }}>Edit
                    </button>
            </form>
        )
    }
}
export default editBtn;