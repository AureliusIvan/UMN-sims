import React from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Flex, Box, Image, Center } from '@chakra-ui/react';
import Tomato from './itemimage/tomato.png';
import Beef from './itemimage/beef.png';
import Bread from './itemimage/bread.png';
import './Cart2.css';
import { CreateChar } from '../../../components/character/CharacterCard';

const COLLECTION = [
  {
    id: uuid(),
    label: 'Media1',
    alt: 'media',
    src: Tomato,
  },
  {
    id: uuid(),
    label: 'Media2',
    alt: 'media',
    src: Beef,
  },
  {
    id: uuid(),
    label: 'Media3',
    alt: 'media',
    src: Bread,
  },
];

// This method is needed for rendering clones of draggables
const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  return (
    <React.Fragment>
      <img
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging ? 'dragging' : ''}
        alt={item.alt}
        src={item.src}
      />
    </React.Fragment>
  );
};

const Copyable = props => {
  return (
    <Droppable
      droppableId={props.droppableId}
      isDropDisabled={true}
      direction="horizontal"
      renderClone={getRenderItem(props.items, props.className)}
    >
      {(provided, snapshot) => (
        <Flex ref={provided.innerRef} className="media-container">
          {props.items.map((item, index) => {
            const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
            return (
              <React.Fragment key={item.id}>
                {shouldRenderClone ? (
                  <img className="media-copy" alt={item.label} src={item.src} />
                ) : (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <React.Fragment>
                        <img
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                          className={
                            snapshot.isDragging
                              ? 'ALlBarang dragging'
                              : 'ALlBarang'
                          }
                          alt={item.label}
                          src={item.src}
                        />
                      </React.Fragment>
                    )}
                  </Draggable>
                )}
              </React.Fragment>
            );
          })}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};

const MediaLibrary = props => {
  return (
    <Copyable
      droppableId="MediaLibrary"
      className="media"
      items={props.items}
    />
  );
};

const LibraryDropZone = props => {
  return (
    <Droppable droppableId="LibraryDropzone">
      {(provided, snapshot) => (
        <Flex ref={provided.innerRef} className="dropzone">
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <Image
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={provided.draggableProps.style}
                  alt={item.alt}
                  src={item.src}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destination;
};

function CartTiga() {
  const [dropzoneItems, setDropzoneItems] = React.useState([]);
  const onDragEnd = React.useCallback(
    result => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId:
          setDropzoneItems(state =>
            reorder(state, source.index, destination.index)
          );
          break;
        case 'MediaLibrary':
          setDropzoneItems(state =>
            copy(COLLECTION, state, source, destination)
          );
          break;
        default:
          break;
      }
    },
    [setDropzoneItems]
  );
  return (
    <div className="Cart">
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex>
          <Box bgColor={'beige'}>
            <h2>Media library</h2>
            <MediaLibrary items={COLLECTION} />
          </Box>
          <CreateChar/>
          <h2>Dropzone</h2>
          <LibraryDropZone items={dropzoneItems} />
        </Flex>
      </DragDropContext>
    </div>
  );
}

export default CartTiga;
