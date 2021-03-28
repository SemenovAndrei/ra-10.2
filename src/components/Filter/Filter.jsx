import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { serviceChangeField, serviceClearField } from '../../actions/actionsCreators'

const Form = styled.form`
  margin: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
`
const Input = styled.input`
  width: 92%;
  font-size: inherit;
  padding: 5px;
`
const Button = styled.button`
  width: 5%;
  padding: 5px;
  cursor: pointer;
  color: white;
  font-size: inherit;
  border: 1px solid #000000;
  background-color: #ff6161;

  :hover {
    background-color: #e70000;
  }
`

export default function Filter() {
  const item = useSelector((state) => state.serviceFilter)
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    const { name, value } = evt.target
    dispatch(serviceChangeField(name, value))
  }

  const handleClear = () => {
    dispatch(serviceClearField())
  }

  return (
    <Form>
      <Input
        onChange={handleChange}
        value={item.filter}
        name="filter"
        placeholder="я фильтр"
      />
      <Button type="reset" onClick={() => handleClear()}>
        ✖
      </Button>
    </Form>
  )
}
