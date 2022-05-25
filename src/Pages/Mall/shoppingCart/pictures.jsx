import React, { useEffect} from 'react';
import { useDrag } from 'react-dnd';
import { Image } from '@chakra-ui/react';

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
            <Image ref={drag} src={url} alt='' width={"100px"} style={{opacity: isDragging ? "0%" : "100%"}}/>
        </>
    )
}