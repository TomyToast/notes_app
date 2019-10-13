import React, { Component } from 'react';

class editBtn extends Component {

    render() {
        return (
            <form className="FormToEdit" onSubmit={(e) => { e.preventDefault(); this.props.editItem(this.props.item.key) }}>
                <textarea
                    placeholder="Try MarkDown here..."
                    onChange={this.props.handleEditInput}
                />
                <button className="EditBtn" type="submit" >Edit
                    </button>
            </form>
        )
    }
}
export default editBtn;