import React, { Component } from 'react';
import NotesListElements from '../src/components/notesListElements';
import MenuPanel from '../src/components/MenuPanel';
import { Container, Row, Col } from 'reactstrap';

import DateCreator from '../src/utils/dateCreator';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notesList: [],
      currentItem: {
        key: '',
        value: '',
        createdAt: new DateCreator(),
        status: '',

      },
      newValue: ''
    }
  }

  // Checking if localStorage exist

  componentDidMount() {
    localStorage.getItem('noteList') && this.setState({
      notesList: JSON.parse(localStorage.getItem('noteList'))
    })
  }

  // Saving noteList in to the LocalStorage

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('noteList', JSON.stringify(nextState.notesList));
    localStorage.setItem('noteListData', Date.now());
  }

  // refering to input element in MenuPanel component
  inputElement = React.createRef();
  inputEditElement = React.createRef();

  handleInput = e => {
    e.preventDefault();
    const itemText = e.target.value;
    const currentItem = {
      key: Date.now(),
      value: itemText,
      createdAt: new DateCreator().addDate(),
      status: 'added'
    }
    this.setState({
      currentItem,
    })
  }

  handleEditInput = e => {
    e.preventDefault();
    const newValue = e.target.value;

    this.setState({
      newValue: newValue
    })


  }

  addItem = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.value !== '') {
      let items = [...this.state.notesList, newItem]

      this.setState({
        notesList: items,
        currentItem: {
          key: '',
          value: '',
        }
      })
    } else {
      alert('add note!');
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.notesList.filter(item => {
      return item.key !== key
    })
    this.setState({
      notesList: filteredItems,
    })
  }


  editItem = (key) => {

    const { notesList, newValue } = this.state

    //checking if newValue is empty

    if (newValue === '') {
      return alert('newValue is empty!!!')
    }

    //looking for index of clicked element

    const thatElement = notesList.map((item, index) => item.key === key ? index : undefined);

    let myIndex;

    for (let i = 0; i <= thatElement.length; i++) {
      if ((thatElement[i] !== undefined)) {
        myIndex = thatElement[i]
      }
    };

    // cutting and connecting updated noteList

    const preList = notesList.slice(0, myIndex)
    const list = notesList.slice(myIndex)

    const element = list.shift();

    const valueOfOldValue = newValue;
    const updatedAt = new DateCreator().addDate();
    const newStatus = 'updated'

    element.value = valueOfOldValue;
    element.createdAt = updatedAt;
    element.status = newStatus;

    list.unshift(element);

    const newList = [...preList, ...list];

    this.setState({
      notesList: newList,
      newValue: '',
    })

    // cleaning value of input in editBtn form
    this.cancelCourse();
  }

  cancelCourse = () => {
    const inputsToReset = document.querySelectorAll('.FormToEdit')
    inputsToReset.forEach(item => item.reset());
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="App" >
              <MenuPanel
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}
              />
              <NotesListElements
                entries={this.state.notesList}
                inputEditElement={this.inputEditElement}
                handleEditInput={this.handleEditInput}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
              />
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}


export default App;
