import React from 'react'
import { useState } from 'react/cjs/react.development';
import Expense from './components/ExpensesFolder/Expense';
import MainFormExpenses from './components/InputExpenses/MainFormExpenses';

const existingDatas = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', 
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
   },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]


const App = () => {
  const [expenses, setExpenses] = useState(existingDatas)

  const addExpenseHandler = (inputedExpenses) => {
   setExpenses((prevExpenses) => {
     return [inputedExpenses, ...prevExpenses]
   })
  }

  return (
    <div>
      <MainFormExpenses onAddExpense= {addExpenseHandler}/>
      <Expense items= {expenses}/>
    </div>
  );

  /*the above return expression in  underthehood expressed without JSX
  will be below like this:-

  return React.createElement(
    'div,
    {},
    React.createElement('h2, {}, "Lets get Started!"),
    React.createElement(Expenses, {items: expenses}) 
    ) */
}

export default App