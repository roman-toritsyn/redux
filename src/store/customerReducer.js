
const defaultState = {
  customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload]}

    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload]}

    case DELETE_CUSTOMER:
      return { ...state, customers: state.customers.filter(c => c.id !== action.payload)}
  
    default:
      return state
  }
}

export const createNewCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: DELETE_CUSTOMER, payload })
export const addManyCustomers = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
