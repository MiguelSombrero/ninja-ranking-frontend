import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ItemList = ({ title, items }) =>
  <>
    <h4>{title}</h4>

    <ListGroup variant='flush'>
      {items.length === 0
        ? 'no items'
        : items.map(item =>
          <ListGroup.Item key={item} >
            {item}
          </ListGroup.Item>
        )}
    </ListGroup>
  </>

export default ItemList