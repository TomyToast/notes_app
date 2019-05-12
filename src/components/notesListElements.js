import React, { Component } from 'react'

class NotesListElements extends Component {

  createNote = item => {
      const second = new Date.getSeconds();
      return (
        <li
            key={item.key}
        >
            <div>
                <button
                    onClick={() => this.props.deleteItem(item.key)}
                >Delete</button>
                <button
                    onClick={() => this.props.editItem(item.key)}
                >Edit</button>
            </div>
            <div>
                <textarea
                value={item.value}/>
            </div>
            <div>
                {`
                ${new Date().getFullYear()}
                -
                ${(new Date().getMonth() < 10) ? `0${new Date().getMonth()}` : new Date().getMonth()}
                -
                ${(new Date().getDate() < 10) ? `0${new Date().getDate()}` : new Date().getDate()}
                `}
            </div>
            <div>
                {`at:
                ${(new Date().getHours() < 10) ? `0${new Date().getHours()}` : new Date().getHours()}
                :
                ${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}
                :
                ${(second < 10) ? `0${second}` : second}
                `}
            </div>
        </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const elements = todoEntries.map(this.createNote)

    return <ul>{elements}</ul>
    }
}

export default NotesListElements;