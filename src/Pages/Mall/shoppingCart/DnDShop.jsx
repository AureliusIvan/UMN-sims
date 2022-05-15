import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

import { Picture } from './pictures'
import ItemList from './shoppingList'
import "./mall.css"

const pictures = ItemList.map(picture => <Picture url={picture.url} id={picture.id} />)

function Dragdrop() {

    const [board, setBoard] = useState([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImage(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImage = (id) => {
        const droppedPictures = ItemList.filter(picture => id === picture.id)
        setBoard(board => [...board, droppedPictures[0]])
    }

    const boardImages = board.map(picture => <Picture url={picture.url} id={picture.id} />)
    return (
        <div className='container'>
            <div className='drag-box'>
                {pictures}
            </div>
            <div className='drop-board' ref={drop} style={{border: isOver ? '3px solid red' : '1px solid black'}}>
                {boardImages}
            </div>
        </div>
    )
}

export default Dragdrop