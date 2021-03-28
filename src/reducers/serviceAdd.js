import {
  SERVICE_CLEAR_FIELD_DELETE,
  SERVICE_CHANGE_FIELD,
  SERVICE_CLEAR_FIELD,
  SERVICE_EDIT_FIELD,
} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  id: '',
  editMode: false,
}

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_CHANGE_FIELD:
      const { name, value } = action.payload
      return { ...state, [name]: value }
    case SERVICE_EDIT_FIELD:
      const { idEdit, nameEdit, valueEdit } = action.payload
      return { ...state, name: nameEdit, price: valueEdit, id: idEdit, editMode: true }
    case SERVICE_CLEAR_FIELD:
      return { ...state, ...initialState }
    case SERVICE_CLEAR_FIELD_DELETE:
      if (action.payload.id === state.id) {
        return { ...state, ...initialState }
      }
      return state
    default:
      return state
  }
}
