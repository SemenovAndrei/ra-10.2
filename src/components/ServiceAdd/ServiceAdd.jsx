import React, { useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  serviceAdd,
  serviceChangeField,
  serviceClearField,
  serviceEdit,
} from '../../actions/actionsCreators'

const Form = styled.form`
  margin: 0 0 30px 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);

  .empty {
    border-color: red;
  }
`
const Input = styled.input`
  width: 40%;
  font-size: inherit;
  padding: 5px;
`
const Button = styled.button`
  width: 15%;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: inherit;
  background-color: #0fc7ff;
  border: 1px solid #000000;

  :hover {
    background-color: #02a7da;
  }
`
const ButtonOk = styled(Button)`
  width: 5%;
`
const ButtonDelete = styled(ButtonOk)`
  background-color: #ff6161;

  :hover {
    background-color: #e70000;
  }
`

function ServiceAdd() {
  const inputName = useRef(null)
  const inputPrice = useRef(null)

  const item = useSelector((state) => state.serviceAdd)
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    const { name, value } = evt.target
    dispatch(serviceChangeField(name, value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (checkEmpty(inputName.current) || checkEmpty(inputPrice.current)) {
      return
    }

    dispatch(serviceAdd(item.name, item.price))
    dispatch(serviceClearField())
  }

  const checkEmpty = (item) => {
    if (!item.value || (item.name === 'price' && isNaN(item.value))) {
      if (!item.classList.contains('empty')) {
        item.classList.add('empty')
      }
      return true
    }

    item.classList.remove('empty')
    return false
  }

  const onEdit = () => {
    if (checkEmpty(inputName.current) || checkEmpty(inputPrice.current)) {
      return
    }

    dispatch(serviceEdit(item.id, item.name, item.price))
    dispatch(serviceClearField())
  }

  const onCancel = () => {
    dispatch(serviceClearField())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        onChange={handleChange}
        value={item.name}
        ref={inputName}
        placeholder="введите название"
      />
      <Input
        name="price"
        onChange={handleChange}
        value={item.price}
        ref={inputPrice}
        placeholder="введите стоимость"
      />
      {!item.editMode && <Button type="submit">Save</Button>}
      {item.editMode && (
        <>
          <ButtonOk onClick={() => onEdit()}>✓</ButtonOk>
          <ButtonDelete onClick={() => onCancel()}>✖</ButtonDelete>
        </>
      )}
    </Form>
  )
}

export default ServiceAdd
