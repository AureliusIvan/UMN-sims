import React from 'react';
import { useDrag } from 'react-dnd';

export function Picture({url, id}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <>
            <img ref={drag} src={url} alt='' width={"150px"} style={{opacity: isDragging ? "0%" : "100%"}}/>
        </>
    )
}