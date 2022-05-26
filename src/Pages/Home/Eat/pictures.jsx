import React from 'react';
import { useDrag } from 'react-dnd';

function dragStartHandler(event) {
  console.log(event);
  return (
    <div draggable="true" onDragStart={this.dragStartHandler(event)}></div>
  );
}

export function Picture({ url, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <img
        ref={drag}
        src={url}
        alt=""
        width={'150px'}
        onDragStart={event => {dragStartHandler(event)}}
        style={{ opacity: isDragging ? '0%' : '100%' }}
      />
    </>
  );
}
