import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../common/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  const onFilterSelectHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear)

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selectedYear={selectedYear} onFilterSelect={onFilterSelectHandler}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
