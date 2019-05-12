import React, { Component } from 'react';
import NotesListElements from '../src/components/notesListElements';
import MenuPanel from '../src/components/MenuPanel';
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    notesList: [],
    currentItem: {
      key: '',
      value: '',
      edit: false,
      },
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { key: Date.now(), value: itemText, edit: false }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.value !== '') {
      let items = [...this.state.notesList, newItem]

      this.setState({
        notesList: items,
        currentItem: { key: '', value: '', edit: false, }
      })
    } else {
      alert('add note!');
    }
    console.log(this.state.notesList)
  }
  // refering to input element in MenuPanel component
  inputElement = React.createRef();

  deleteItem = key => {
    const filteredItems = this.state.notesList.filter( item => {
      return item.key !== key
    })
    this.setState({
      notesList: filteredItems,
    })
    console.log(this.state.notesList)
  }

  handleEditItem = (key) => {

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
          deleteItem={this.deleteItem}
          editItem={this.handleEditItem}
        />
      </div>
    )
  }
}


export default App;
