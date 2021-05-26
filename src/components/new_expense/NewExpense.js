import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react'

const NewExpense = (props) => {

  const [isFormShowing, setFormShowing] = useState(false)

  const saveExpenseDataHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
  }

  const toggleFormVisibility = () => {
    setFormShowing((preState) => !preState)
  }

  const cancelAddHandler = () => {
    setFormShowing(false)
  }

  let content = <button onClick={toggleFormVisibility}>Add New Expense</button>
  if (isFormShowing) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelAddData={cancelAddHandler}/>
  }

  return (
    <div className='new-expense'>
      {content}
    </div>
  )
}

export default NewExpense