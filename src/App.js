import React, { Component } from 'react';
import NotesListElements from '../src/components/notesListElements';
import MenuPanel from '../src/components/MenuPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notesList: [],
      currentItem: {
        key: '',
        value: '',
        edit: true,
      },
    }
  }

  // refering to input element in MenuPanel component
  inputElement = React.createRef();

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { key: Date.now(), value: itemText }
    this.setState({
      currentItem,
    })
  }

  handleEditInput = e => {
    console.log(e.target)
  }

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.value !== '') {
      let items = [...this.state.notesList, newItem]

      this.setState({
        notesList: items,
        currentItem: { key: '', value: '' }
      })
    } else {
      alert('add note!');
    }
    console.log(this.state.notesList)
  }

  deleteItem = (key) => {
    const filteredItems = this.state.notesList.filter(item => {
      return item.key !== key
    })
    this.setState({
      notesList: filteredItems,
    })
    console.log(this.state.notesList)
  }

  block = (e) => {
    e.preventDefault();
  }

  editItem = (key) => {
    // this.state.notesList.filter(item => {
    //   const { value } = this.textareaElement.current;
    //
    //   return item.key === key
    // })

    // this.setState({
    //   currentItem: { edit: !this.state.edit },
    // })
    console.log(key)
  }


  render() {
    return (
      <div className="App">
        <MenuPanel
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <NotesListElements
          entries={this.state.notesList}
          textareaElement={this.textareaElement}
          handleTextarea={this.handleTextarea}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          block={this.block}
        />
      </div>
    )
  }
}


export default App;
