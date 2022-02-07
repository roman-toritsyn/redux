import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction} from './store/cashReducer'
import { createNewCustomerAction, removeCustomerAction} from './store/customerReducer'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  console.log(cash);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }

    dispatch(createNewCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>Cash: {cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять</button>
      <br/>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>

      {customers.length > 0 ?
        <div>
          {customers.map(c =>
            <div
              onClick={() => removeCustomer(c)}
            >
              {c.name}
            </div>
            )
          }
        </div>
        :
        <div>
          No customers
        </div>
      }
    </div>
  );
}

export default App;
