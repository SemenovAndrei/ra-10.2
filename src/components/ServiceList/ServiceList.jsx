import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  serviceClearFieldDelete,
  serviceEditField,
  serviceRemove,
} from '../../actions/actionsCreators'
import styled from 'styled-components'

const Ul = styled.ul`
  margin: 30px 0;
  padding: 0;
`
const Li = styled.li`
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  list-style-position: inside;
  box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);

  :not(:first-child) {
    margin-top: 15px;
  }
`
const ItemName = styled.div`
  width: 65%;
`
const ItemPrice = styled.div`
  width: 15%;
`
const Button = styled.button`
  width: 5%;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: inherit;
  background-color: #0fc7ff;
  border-style: none;

  :hover {
    background-color: #02a7da;
  }
`
const ButtonDelete = styled(Button)`
  background-color: #ff6161;

  :hover {
    background-color: #e70000;
  }
`

function ServiceList() {
  const dispatch = useDispatch()

  const searchValue = useSelector((state) => state.serviceFilter).filter
  const items = useSelector((state) => state.serviceList)

  const filteredItems = items.filter((o) => {
    if (searchValue) {
      const name = o.name.toLowerCase()
      const filter = searchValue.toLowerCase()

      if (name.startsWith(filter)) {
        return o
      }
      return null
    }

    return o
  })

  const handleRemove = (id) => {
    dispatch(serviceRemove(id))
    dispatch(serviceClearFieldDelete(id))
  }

  const handleEdit = (id, name, price) => {
    dispatch(serviceEditField(id, name, price))
  }

  return (
    <Ul>
      {filteredItems.map((o) => (
        <Li key={o.id}>
          <ItemName>{o.name}</ItemName>
          <ItemPrice>{o.price}</ItemPrice>
          <Button onClick={() => handleEdit(o.id, o.name, o.price)}>🖉</Button>
          <ButtonDelete onClick={() => handleRemove(o.id)}>✖</ButtonDelete>
        </Li>
      ))}
    </Ul>
  )
}

export default ServiceList
