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
    const currentItem = { value: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.value !== '') {
      console.log(newItem)
      const items = [...this.state.notesList, newItem]
      this.setState({
        noteList: items,
        currentItem: { key: '', value: '', edit: false }
      })
    } else {
      alert('add note!');
    }
  }
  // refering to input element in MenuPanel component
  inputElement = React.createRef();

  deleteItem = key => {
    const filteredItems = this.state.items.filter( item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
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
        />
      </div>
    )
  }
}


export default App;
