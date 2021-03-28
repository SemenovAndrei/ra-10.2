import { nanoid } from 'nanoid'
import { SERVICE_ADD, SERVICE_EDIT, SERVICE_REMOVE } from '../actions/actionTypes'

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
]

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_ADD:
      const { name, price } = action.payload
      return [...state, { id: nanoid(), name, price: Number(price) }]
    case SERVICE_REMOVE:
      const { id } = action.payload
      return state.filter((service) => service.id !== id)
    case SERVICE_EDIT:
      const { idEdit, nameEdit, priceEdit } = action.payload
      return state.map((service) => {
        if (service.id === idEdit) {
          return { ...service, name: nameEdit, price: priceEdit }
        }
        return service
      })
    default:
      return state
  }
}
