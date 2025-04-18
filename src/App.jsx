import { useState } from 'react'
import './App.css'
import { ExpenseList } from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import { ExpenseForm } from './components/ExpenseForm'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: '1 pack of Milk',
      amount: 10,
      category: 'ultilities'
    },
    {
      id: 2,
      description: 'netflix subscription',
      amount: 15,
      category: 'entertainment'
    },
    {
      id: 3,
      description: '1 pack of Rice',
      amount: 20,
      category: 'groceries'
    }
  ])

  const addItem = (data) => {
    console.log(data)
    setExpenses(() => [...expenses, data])
  }

  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const itemFilter = (cat) => {
    setExpenses(expenses.filter(expense => expense.category === cat))
  }

  return (
    <>
      <ExpenseForm addExpense = {addItem}/>
      <ExpenseFilter filterItem = {itemFilter}/>
      <ExpenseList items = {expenses} deleteItem = {deleteItem} />
    </>
  )
}

export default App
