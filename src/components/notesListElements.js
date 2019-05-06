import React, { Component } from 'react'

class NotesListElements extends Component {

  createNote = item => {
      return (
        <li
            key={item.key}
            onClick={() => this.props.deleteItem(item.key)}
        >
            {item.value}
        </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const elements = todoEntries.map(this.createNote)

    return <ul>{console.log(elements)}</ul>
    }
}

export default NotesListElements;