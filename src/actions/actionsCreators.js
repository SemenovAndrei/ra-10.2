import {
  SERVICE_ADD,
  SERVICE_EDIT,
  SERVICE_REMOVE,
  SERVICE_EDIT_FIELD,
  SERVICE_CLEAR_FIELD,
  SERVICE_CHANGE_FIELD,
  SERVICE_CLEAR_FIELD_DELETE,
} from '../actions/actionTypes'

export function serviceClearField() {
  return { type: SERVICE_CLEAR_FIELD }
}

export function serviceClearFieldDelete(id) {
  return { type: SERVICE_CLEAR_FIELD_DELETE, payload: { id } }
}

export function serviceRemove(id) {
  return { type: SERVICE_REMOVE, payload: { id } }
}

export function serviceAdd(name, price) {
  return { type: SERVICE_ADD, payload: { name, price } }
}

export function serviceEdit(idEdit, nameEdit, priceEdit) {
  return { type: SERVICE_EDIT, payload: { idEdit, nameEdit, priceEdit } }
}

export function serviceChangeField(name, value) {
  return { type: SERVICE_CHANGE_FIELD, payload: { name, value } }
}

export function serviceEditField(idEdit, nameEdit, valueEdit) {
  return { type: SERVICE_EDIT_FIELD, payload: { idEdit, nameEdit, valueEdit } }
}
