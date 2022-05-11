import React,{useState} from 'react'
import './Expense.css'
import Card from  '../UIFolder/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expense = (props) =>{

    const [filteredYear, setFilteredyear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredyear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
       
    })

    return(
        <div>
            <Card className='expenses'>
            <ExpensesFilter 
                defaultYear = {filteredYear} //THis is for the default year assignment on the dropdown menu
                onSaveSelectedYear = {filterChangeHandler}
            />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList  items= {filteredExpenses}/>
            
            
        </Card>
        </div>
        
    )
}

export default Expense