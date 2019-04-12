import React from 'react'

const NotesListElements = ({ entries, handleWrite, value }) => {

    const elements = entries.map( (element, index) => {
        return (
            <li>
                <textarea
                    key={index}
                    value={value}
                    onChange={handleWrite}
                />
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