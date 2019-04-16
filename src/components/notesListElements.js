import React from 'react'

const NotesListElements = ({ notesList, currentItem, editNote }) => {
    // console.log(notesList)
    const elements = notesList.map( (element, index) => {
        return (
            <li
            onClick={() => editNote(index)}
            key={index}>
                <div
                    contentEditable={element.edit}
                >
                {element.value}
                </div>
                <div>{element.key}</div>
            </li>
        )
    })

  return (
    <>
        <ul>
            {elements}
        </ul>
    </>
  )
}

export default NotesListElements;