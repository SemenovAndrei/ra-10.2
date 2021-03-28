import { SERVICE_CHANGE_FIELD, SERVICE_CLEAR_FIELD } from '../actions/actionTypes'

const initialState = {
  filter: '',
}

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_CHANGE_FIELD:
      const { name, value } = action.payload
      return { ...state, [name]: value }
    case SERVICE_CLEAR_FIELD:
      return { ...state, ...initialState }
    default:
      return state
  }
}
