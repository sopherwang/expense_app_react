import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <p className='expenses-list__fallback'>No expenses found.</p>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
      })}
    </ul>
  )
}

export default ExpenseList