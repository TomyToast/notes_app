import React, { Component } from 'react';

class editBtn extends Component {

    render() {
        return (
            <form className="formToEdit" onSubmit={(e) => { e.preventDefault(); this.props.editItem(this.props.item.key) }}>
                <textarea
                    placeholder="Try MarkDown here..."
                    onChange={this.props.handleEditInput}
                />
                <button type="submit" >Edit
                    </button>
            </form>
        )
    }
}
export default editBtn;